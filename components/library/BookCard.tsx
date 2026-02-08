import type { Book, Author } from "@/components/library/types";
import { ReceiptText, BookOpen, Star, Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface BookCardProps {
  book: Book;
  onAddToCounter?: (id: string) => void;
  onExploreCompanion?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
}

export function BookCard({
  book,
  onAddToCounter,
  onExploreCompanion,
  onAddToWishlist,
}: BookCardProps) {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-xl border border-stone-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-stone-800 dark:bg-stone-900 animate-in fade-in zoom-in-95 duration-500"
    >
      {/* Cover Image */}
      <div className="relative aspect-2/3 w-full overflow-hidden rounded-lg bg-stone-200 shadow-sm dark:bg-stone-800">
        {book.isRare && (
          <div className="font-body absolute top-2 left-2 z-10 flex items-center gap-1.5 rounded-sm bg-stone-900/90 px-2 py-1 text-[10px] font-medium tracking-wider text-stone-100 uppercase shadow-lg backdrop-blur-md">
            <div className="h-1.5 w-1.5 rotate-45 bg-amber-200" />
            Rare
          </div>
        )}

        {book.isCuratorsChoice && (
          <div className="absolute top-0 right-3 z-10">
            <div className="font-heading relative flex h-16 w-12 items-center justify-center overflow-hidden bg-amber-400 text-xs leading-none font-bold text-amber-950 shadow-lg after:absolute after:-bottom-2.5 after:left-0 after:h-0 after:w-0 after:border-t-10 after:border-r-24 after:border-l-24 after:border-t-amber-400 after:border-r-transparent after:border-l-transparent">
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                }}
              />
              <span className="relative z-10 -rotate-90 whitespace-nowrap">
                Top Pick
              </span>
            </div>
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
          <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
            <Button
              onClick={() => onExploreCompanion?.(book.id)}
              variant="secondary"
              size="sm"
              className="font-body cursor-pointer rounded-full bg-white/90 text-stone-900 hover:bg-white"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Explore
            </Button>
          </div>
          <div className="transition-transform duration-200 hover:scale-110 active:scale-90">
            <Button
              onClick={() => onAddToWishlist?.(book.id)}
              size="sm"
              aria-label={`Add ${book.title} to wishlist`}
              className="font-body cursor-pointer rounded-full bg-white/90 text-red-500 hover:bg-white hover:text-red-600"
            >
              <Heart className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="transition-transform duration-200 hover:scale-110 active:scale-90">
            <Button
              onClick={() => onAddToCounter?.(book.id)}
              size="sm"
              aria-label={`Add ${book.title} to counter`}
              className="font-body relative cursor-pointer rounded-full border-none bg-orange-600 text-white hover:bg-orange-700"
            >
              <ReceiptText className="h-4 w-4" aria-hidden="true" />
              <Plus
                className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white text-orange-600 shadow-sm"
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col pt-4">
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
