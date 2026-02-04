"use client";

import React from "react";
import { TheLibrary } from "@/components/library/TheLibrary";
import {
  initialBooks,
  initialCollections,
} from "@/components/library/sample-data";
import { useCart } from "@/lib/hooks/useCart";
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

  const handleAddToCounter = (bookId: string) => {
    const book = initialBooks.find((b) => b.id === bookId);
    if (book) {
      addItem(mapBookToSummary(book));
      // Show toast notification
      // Using a simple alert for now if no toast provider, but assuming toast works or will be added
      console.log(`Added ${book.title} to counter`);
      toast.success(`Added "${book.title}" to your cart!`);
    }
  };

  return (
    <TheLibrary
      books={initialBooks}
      collections={initialCollections}
      onAddToCounter={handleAddToCounter}
    />
  );
}
