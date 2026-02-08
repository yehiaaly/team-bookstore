"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { TheLibraryProps, Book, Author } from "@/components/library/types";
import { BookCard } from "./BookCard";
import { Search, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";

export function TheLibrary({
  books,
  onAddToCounter,
  onAddToWishlist,
  onExploreCompanion,
  onSearch,
}: TheLibraryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    topPicks: false,
    rareFinds: false,
  });

  const filteredBooks = books.filter((book: Book) => {
    const matchesSearch =
      !searchQuery ||
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.authors.some((a: Author) =>
        a.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesTopPick = !filters.topPicks || book.isCuratorsChoice;
    const matchesRare = !filters.rareFinds || book.isRare;

    return matchesSearch && matchesTopPick && matchesRare;
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const router = useRouter();

  const handleExplore = (id: string) => {
    if (onExploreCompanion) {
      onExploreCompanion(id);
    } else {
      router.push(`/book/${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Hero Section */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-stone-900 px-4 text-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg-v2.jpg"
            alt="Library ambience"
            fill
            sizes="100vw"
            className="object-cover opacity-90 transition-opacity duration-700"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="animate-in fade-in slide-in-from-bottom-4 relative z-10 mx-auto max-w-4xl space-y-8 pt-40 duration-1000">
          <div className="mb-4 inline-block rounded-full border border-white/30 bg-white/5 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-white/90 uppercase backdrop-blur-sm">
            Est. 2026 • Curated with Care
          </div>

          <h1 className="font-heading text-4xl leading-tight font-medium tracking-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl">
            Find Your Next <br />
            <span className="font-normal text-orange-100 italic">
              True Companion.
            </span>
          </h1>

          <p className="font-body mx-auto max-w-xl text-lg leading-relaxed font-light text-stone-200 drop-shadow-md">
            Escape the algorithms. Discover distinct voices, quality bindings,
            and stories selected by humans, for humans.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("library-content")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-heading mx-auto mt-8 flex cursor-pointer items-center gap-2 rounded-full bg-orange-700/90 px-8 py-3 text-lg font-medium text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-orange-700"
            aria-label="Explore The Library"
          >
            Explore The Library
            <ChevronDown className="h-4 w-4 animate-pulse" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* Main Content Area */}

      <section
        id="library-content"
        aria-label="Book Collection"
        className="relative z-20 mx-auto mt-50 min-h-screen w-full max-w-7xl scroll-mt-32 px-4 py-20 md:px-8"
      >
        <h2 className="sr-only">Our Collection</h2>
        {/* Search & Filters */}
        <div className="mx-auto mb-12 flex max-w-4xl flex-col items-center gap-6">
          {/* Search Bar */}
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search by title, author, or interest..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                onSearch?.(e.target.value);
              }}
              aria-label="Search books"
              className="font-body w-full rounded-full border border-stone-200 bg-white px-6 py-3 pl-14 text-base text-stone-900 shadow-sm transition-shadow placeholder:text-stone-400 hover:shadow-md focus:ring-1 focus:ring-orange-500/50 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100"
            />
            <Search className="absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-stone-400 transition-colors" />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => toggleFilter("topPicks")}
              aria-label="Filter by Top Picks"
              aria-pressed={filters.topPicks}
              className={cn(
                "group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                filters.topPicks
                  ? "border-amber-400 bg-amber-50 text-amber-900 dark:bg-amber-900/20 dark:text-amber-100"
                  : "border-stone-200 bg-transparent text-stone-500 hover:border-amber-300 hover:text-amber-700 dark:border-stone-800 dark:text-stone-400 dark:hover:text-amber-400",
              )}
            >
              <div
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded-full border transition-colors",
                  filters.topPicks
                    ? "border-amber-500 bg-amber-500"
                    : "border-stone-300 group-hover:border-amber-400",
                )}
              >
                {filters.topPicks && (
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                )}
              </div>
              Top Picks
            </button>

            <button
              onClick={() => toggleFilter("rareFinds")}
              aria-label="Filter by Rare Finds"
              aria-pressed={filters.rareFinds}
              className={cn(
                "group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                filters.rareFinds
                  ? "border-indigo-400 bg-indigo-50 text-indigo-900 dark:bg-indigo-900/20 dark:text-indigo-100"
                  : "border-stone-200 bg-transparent text-stone-500 hover:border-indigo-300 hover:text-indigo-700 dark:border-stone-800 dark:text-stone-400 dark:hover:text-indigo-400",
              )}
            >
              <div
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded-full border transition-colors",
                  filters.rareFinds
                    ? "border-indigo-500 bg-indigo-500"
                    : "border-stone-300 group-hover:border-indigo-400",
                )}
              >
                {filters.rareFinds && (
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                )}
              </div>
              Rare Finds
            </button>
          </div>
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filteredBooks.map((book: Book, index: number) => (
              <BookCard
                key={book.id}
                book={book}
                priority={index < 4}
                onAddToCounter={onAddToCounter}
                onAddToWishlist={onAddToWishlist}
                onExploreCompanion={handleExplore}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-heading mb-2 text-2xl text-stone-400">
              No companions found.
            </p>
            <p className="font-body text-stone-500">
              Try adjusting your search or browsing our collections.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
