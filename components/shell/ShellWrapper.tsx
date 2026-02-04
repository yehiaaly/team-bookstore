"use client";

import React from "react";
import { AppShell } from "./AppShell";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter, usePathname } from "next/navigation";

export function ShellWrapper({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
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
      onNavigate={(href) => router.push(href)}
      onLogout={logout}
    >
      {children}
    </AppShell>
  );
}
