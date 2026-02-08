import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { CartProvider } from "@/contexts/CartContext";
import React from "react";
// We need a wrapper component to use hooks (useAuth, useRouter)
import { ShellWrapper } from "@/components/shell/ShellWrapper";
import { Toaster } from "sonner";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://8272f0a9.team-bookstore.pages.dev";

export const metadata: Metadata = {
  title: {
    default: "Team Bookstore – Curated Rare & Popular Books",
    template: "%s | Team Bookstore",
  },
  description:
    "Discover a handpicked collection of rare, vintage, and popular books. Browse curated literary gems, timeless classics, and hidden treasures.",
  keywords: [
    "bookstore",
    "rare books",
    "curated books",
    "vintage books",
    "online bookstore",
    "literary classics",
    "book collection",
  ],
  authors: [{ name: "Team Bookstore" }],
  openGraph: {
    title: "Team Bookstore – Curated Rare & Popular Books",
    description:
      "Discover a handpicked collection of rare, vintage, and popular books. Browse curated literary gems, timeless classics, and hidden treasures.",
    url: baseUrl,
    siteName: "Team Bookstore",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Team Bookstore Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Bookstore – Curated Rare & Popular Books",
    description:
      "Discover a handpicked collection of rare, vintage, and popular books. Browse curated literary gems and timeless classics.",
    creator: "@teambookstore",
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
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
