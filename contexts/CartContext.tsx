"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Order, BookSummary } from "@/types/counter";

interface CartContextType {
  order: Order;
  addItem: (book: BookSummary) => void;
  removeItem: (itemId: string) => void;
  toggleGift: (isGift: boolean) => void;
  clearCart: () => void;
  isLoaded: boolean;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [order, setOrder] = useState<Order>(() => {
    // Initial state setup to run only on client or return defaults
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("team-books-cart");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Failed to parse cart", e);
        }
      }
      return {
        id: `ord-${window.crypto.randomUUID()}`,
        items: [],
        subtotal: 0,
        tax: 0,
        total: 0,
        isGift: false,
      };
    }
    return {
      id: "init",
      items: [],
      subtotal: 0,
      tax: 0,
      total: 0,
      isGift: false,
    };
  });

  const [isLoaded, setIsLoaded] = useState(false);

  // We handled initial load in useState lazy initializer, so we just set loaded true
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("team-books-cart", JSON.stringify(order));
    }
  }, [order, isLoaded]);

  const addItem = useCallback((book: BookSummary) => {
    setOrder((prev) => {
      const existingItem = prev.items.find((i) => i.book.id === book.id);
      let newItems;

      if (existingItem) {
        newItems = prev.items.map((i) =>
          i.book.id === book.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      } else {
        newItems = [
          ...prev.items,
          { id: `item-${Date.now()}`, book, quantity: 1 },
        ];
      }

      const subtotal = newItems.reduce(
        (sum, item) => sum + item.book.price * item.quantity,
        0,
      );
      const tax = subtotal * 0.08;
      const total = subtotal + tax;

      return {
        ...prev,
        items: newItems,
        subtotal,
        tax,
        total,
      };
    });
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setOrder((prev) => {
      const newItems = prev.items.filter((i) => i.id !== itemId);

      const subtotal = newItems.reduce(
        (sum, item) => sum + item.book.price * item.quantity,
        0,
      );
      const tax = subtotal * 0.08;
      const total = subtotal + tax;

      return {
        ...prev,
        items: newItems,
        subtotal,
        tax,
        total,
      };
    });
  }, []);

  const toggleGift = useCallback((isGift: boolean) => {
    setOrder((prev) => ({
      ...prev,
      isGift,
    }));
  }, []);

  const clearCart = useCallback(() => {
    setOrder({
      id: `ord-${typeof window !== "undefined" ? window.crypto.randomUUID() : "new"}`,
      items: [],
      subtotal: 0,
      tax: 0,
      total: 0,
      isGift: false,
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        order,
        addItem,
        removeItem,
        toggleGift,
        clearCart,
        isLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}
