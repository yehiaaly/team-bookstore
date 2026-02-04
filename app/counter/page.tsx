"use client";

import React from "react";
import { TheCounter } from "@/components/counter/TheCounter";
import { useCart } from "@/lib/hooks/useCart";
import { CustomerDetails } from "@/types/counter";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function CounterPage() {
  const { order, removeItem, toggleGift, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const handleCompletePurchase = (details: CustomerDetails) => {
    // In a real app, we would send this to the backend
    console.log("Purchase completed:", { order, details });

    // Mock success
    clearCart();
    alert(`Thank you, ${details.fullName}! Your order has been placed.`);
    router.push("/");
  };

  const initialValues = user
    ? {
        fullName: `${user.firstName} ${user.lastName}`,
        email: user.email,
      }
    : undefined;

  return (
    <div className="min-h-screen">
      <TheCounter
        order={order}
        onRemoveItem={removeItem}
        onToggleGift={toggleGift}
        onCompletePurchase={handleCompletePurchase}
        initialValues={initialValues}
      />
    </div>
  );
}
