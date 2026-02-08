"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface SavedItem {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  price: number;
  addedAt: string;
}

interface FavoritesContextType {
  favorites: SavedItem[];
  isLoading: boolean;
  addFavorite: (item: SavedItem) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

// Mock Data
const MOCK_FAVORITES: SavedItem[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverUrl: "https://covers.openlibrary.org/b/id/8432047-L.jpg",
    price: 12.99,
    addedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverUrl: "https://covers.openlibrary.org/b/id/1261770-L.jpg",
    price: 14.5,
    addedAt: new Date().toISOString(),
  },
];

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<SavedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching favorites
    const timer = setTimeout(() => {
      setFavorites(MOCK_FAVORITES);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const addFavorite = (item: SavedItem) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, isLoading, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
