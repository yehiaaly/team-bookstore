"use client";

import React from "react";
import { TheLibrary } from "@/components/library/TheLibrary";
import PageTransition from "@/components/ui/PageTransition";
import { initialBooks } from "@/components/library/sample-data";
import { useCart } from "@/lib/hooks/useCart";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Book } from "@/components/library/types";
import { BookSummary } from "@/types/counter";
import { toast } from "sonner";

/**
 * Helper to transform Library Book to Counter BookSummary
 */
function mapBookToSummary(book: Book): BookSummary {
  return {
    id: book.id,
    title: book.title,
    author: book.authors[0]?.name || "Unknown Author",
    price: book.price,
    coverUrl: book.coverUrl,
  };
}

export default function LibraryPage() {
  const { addItem } = useCart();
  const { addFavorite, isFavorite } = useFavorites();

  const handleAddToCounter = (bookId: string) => {
    const book = initialBooks.find((b) => b.id === bookId);
    if (book) {
      addItem(mapBookToSummary(book));
      // Show toast notification
      toast.success(`Added "${book.title}" to your cart!`);
    }
  };

  const handleAddToWishlist = (bookId: string) => {
    const book = initialBooks.find((b) => b.id === bookId);
    if (book) {
      if (isFavorite(bookId)) {
        toast.info(`"${book.title}" is already in your favorites.`);
        return;
      }

      addFavorite({
        id: book.id,
        title: book.title,
        author: book.authors[0]?.name || "Unknown Author",
        coverUrl: book.coverUrl,
        price: book.price,
        addedAt: new Date().toISOString(),
      });
      toast.success(`Added "${book.title}" to your favorites!`);
    }
  };

  return (
    <PageTransition>
      <TheLibrary
        books={initialBooks}
        onAddToCounter={handleAddToCounter}
        onAddToWishlist={handleAddToWishlist}
      />
    </PageTransition>
  );
}
