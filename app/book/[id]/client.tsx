"use client";

import { BookCompanion } from "@/components/book-companion";
import { BookDetail } from "@/types/book";
import { useRouter } from "next/navigation";

interface BookCompanionClientProps {
  book: BookDetail;
}

export function BookCompanionClient({ book }: BookCompanionClientProps) {
  const router = useRouter();

  return (
    <BookCompanion
      book={book}
      onBack={() => router.push("/library")}
      onAddToCounter={(id) => {
        console.log("Add to counter", id);
        alert(`Added ${book.title} to counter!`);
      }}
      onAddToWishlist={(id) => {
        console.log("Add to wishlist", id);
        alert(`Added ${book.title} to wishlist!`);
      }}
    />
  );
}
