"use client";

import { BookCompanion } from "@/components/book-companion";
import { BookDetail } from "@/types/book";
import { useRouter } from "next/navigation";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useCart } from "@/lib/hooks/useCart";
import { toast } from "sonner";

interface BookCompanionClientProps {
  book: BookDetail;
}

export function BookCompanionClient({ book }: BookCompanionClientProps) {
  const router = useRouter();
  const { addFavorite, isFavorite } = useFavorites();
  const { addItem } = useCart();

  return (
    <BookCompanion
      book={book}
      onBack={() => router.push("/library")}
      onAddToCounter={(id) => {
        addItem({
          id: book.id,
          title: book.title,
          author: book.authors[0]?.name || "Unknown Author",
          price: book.price,
          coverUrl: book.coverUrl,
        });
        toast.success(`Added "${book.title}" to your counter!`);
      }}
      onAddToWishlist={(id) => {
        if (isFavorite(book.id)) {
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
      }}
    />
  );
}
