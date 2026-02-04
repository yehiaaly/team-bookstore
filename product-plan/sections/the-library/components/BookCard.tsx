import type { Book } from "../types";
import { ShoppingBag, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="group relative flex flex-col bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Cover Image */}
      <div className="relative aspect-2/3 w-full overflow-hidden bg-stone-200 dark:bg-stone-800">
        {book.isRare && (
          <div className="absolute top-3 left-3 z-10 bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-full border border-amber-200 uppercase tracking-wider font-body">
            Rare Edition
          </div>
        )}
        <img
          src={book.coverUrl}
          alt={book.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover Overlay Actions */}
        <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <Button
            onClick={() => onExploreCompanion?.(book.id)}
            variant="secondary"
            size="sm"
            className="rounded-full bg-white/90 text-stone-900 hover:bg-white font-body"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Explore
          </Button>
          <Button
            onClick={() => onAddToCounter?.(book.id)}
            size="sm"
            className="rounded-full bg-orange-600 hover:bg-orange-700 text-white border-none font-body"
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-stone-500 dark:text-stone-400 font-mono">
            {book.rating.toFixed(1)} Friend Score
          </span>
        </div>

        {/* Title & Author */}
        <h3 className="font-heading text-xl font-bold text-stone-900 dark:text-stone-50 leading-tight mb-1 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-stone-500 dark:text-stone-400 font-body mb-4">
          by{" "}
          <span className="text-stone-700 dark:text-stone-300 font-medium">
            {book.authors.map((a) => a.name).join(", ")}
          </span>
        </p>

        {/* Binding/Edition Info */}
        <div className="mt-auto pt-4 border-t border-stone-100 dark:border-stone-800">
          <p className="text-xs text-stone-400 dark:text-stone-500 font-mono mb-2 uppercase tracking-wide">
            {book.binding}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-heading text-lg font-bold text-orange-600 dark:text-orange-500">
              ${book.price.toFixed(2)}
            </span>
            {book.curatorNote && (
              <div className="group/note relative">
                <span className="text-xs font-bold text-stone-400 underline decoration-dotted cursor-help">
                  Curator's Note
                </span>
                <div className="absolute bottom-full right-0 mb-2 w-48 p-3 bg-stone-800 text-stone-50 text-xs rounded shadow-lg opacity-0 group-hover/note:opacity-100 transition-opacity pointer-events-none z-20">
                  "{book.curatorNote}"
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
