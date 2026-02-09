import type { Metadata } from "next";
import {
  Playfair_Display,
  Source_Sans_3,
  IBM_Plex_Mono,
  Permanent_Marker,
} from "next/font/google";
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
    icon: "/public/icon.svg",
    shortcut: "/public/icon.svg",
    apple: "/public/icon.svg",
  },
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceSans.variable} ${playfair.variable} ${ibmPlexMono.variable} ${permanentMarker.variable} antialiased`}
        suppressHydrationWarning
      >
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
