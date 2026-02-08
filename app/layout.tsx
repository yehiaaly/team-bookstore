import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { CartProvider } from "@/contexts/CartContext";
import React from "react";
// We need a wrapper component to use hooks (useAuth, useRouter)
import { ShellWrapper } from "@/components/shell/ShellWrapper";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Team Bookstore",
  description: "A customized online bookstore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <AuthProvider>
          <FavoritesProvider>
            <CartProvider>
              <ShellWrapper>{children}</ShellWrapper>
              <Toaster position="bottom-right" />
            </CartProvider>
          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
