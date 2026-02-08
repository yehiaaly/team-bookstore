"use client";

import React from "react";
import { AppShell } from "./AppShell";
import { useAuth } from "@/contexts/AuthContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useCart } from "@/lib/hooks/useCart";
import { useRouter, usePathname } from "next/navigation";

export function ShellWrapper({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const { favorites } = useFavorites();
  const { order } = useCart();
  const router = useRouter();
  const pathname = usePathname();

  const navigationItems = [
    {
      label: "The Library",
      href: "/library",
      isActive: pathname === "/library" || pathname === "/",
    },
    { label: "About Us", href: "/about", isActive: pathname === "/about" },
  ];

  return (
    <AppShell
      navigationItems={navigationItems}
      user={
        user
          ? {
              name: `${user.firstName} ${user.lastName}`,
              avatarUrl: user.avatarUrl,
            }
          : undefined
      }
      favoritesCount={favorites.length}
      cartCount={order.items.length}
      onNavigate={(href) => router.push(href)}
      onLogout={logout}
    >
      {children}
    </AppShell>
  );
}
