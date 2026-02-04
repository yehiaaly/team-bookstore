import type { Book, Author } from "@/components/library/types";
import { ReceiptText, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface BookCardProps {
  book: Book;
  onAddToCounter?: (id: string) => void;
  onExploreCompanion?: (id: string) => void;
}

export function BookCard({
  book,
  onAddToCounter,
  onExploreCompanion,
}: BookCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-stone-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-stone-800 dark:bg-stone-900">
      {/* Cover Image */}
      <div className="relative aspect-2/3 w-full overflow-hidden bg-stone-200 dark:bg-stone-800">
        {book.isRare && (
          <div className="font-body absolute top-3 left-3 z-10 rounded-full border border-amber-200 bg-amber-100 px-2 py-1 text-xs font-bold tracking-wider text-amber-800 uppercase">
            Rare Edition
          </div>
        )}
        <Image
          src={book.coverUrl}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-stone-900/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <Button
            onClick={() => onExploreCompanion?.(book.id)}
            variant="secondary"
            size="sm"
            className="font-body rounded-full bg-white/90 text-stone-900 hover:bg-white"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Explore
          </Button>
          <Button
            onClick={() => onAddToCounter?.(book.id)}
            size="sm"
            className="font-body rounded-full border-none bg-orange-600 text-white hover:bg-orange-700"
          >
            <ReceiptText className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Rating */}
        <div className="mb-2 flex items-center gap-1">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span className="font-mono text-xs font-medium text-stone-500 dark:text-stone-400">
            {book.rating.toFixed(1)} Friend Score
          </span>
        </div>

        {/* Title & Author */}
        <h3 className="font-heading mb-1 line-clamp-2 text-xl leading-tight font-bold text-stone-900 dark:text-stone-50">
          {book.title}
        </h3>
        <p className="font-body mb-4 text-sm text-stone-500 dark:text-stone-400">
          by{" "}
          <span className="font-medium text-stone-700 dark:text-stone-300">
            {book.authors.map((a: Author) => a.name).join(", ")}
          </span>
        </p>

        {/* Binding/Edition Info */}
        <div className="mt-auto border-t border-stone-100 pt-4 dark:border-stone-800">
          <p className="mb-2 font-mono text-xs tracking-wide text-stone-400 uppercase dark:text-stone-500">
            {book.binding}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-heading text-lg font-bold text-orange-600 dark:text-orange-500">
              ${book.price.toFixed(2)}
            </span>
            {book.curatorNote && (
              <div className="group/note relative">
                <span className="cursor-help text-xs font-bold text-stone-400 underline decoration-dotted">
                  Curator&apos;s Note
                </span>
                <div className="pointer-events-none absolute right-0 bottom-full z-20 mb-2 w-48 rounded bg-stone-800 p-3 text-xs text-stone-50 opacity-0 shadow-lg transition-opacity group-hover/note:opacity-100">
                  &quot;{book.curatorNote}&quot;
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
