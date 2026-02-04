"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type {
  TheLibraryProps,
  Book,
  Collection,
  Author,
} from "@/components/library/types";
import { BookCard } from "./BookCard";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";

export function TheLibrary({
  books,
  collections,
  onAddToCounter,
  onExploreCompanion,
  onSelectCollection,
  onSearch,
}: TheLibraryProps) {
  const [activeTab, setActiveTab] = useState(collections[0]?.id);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book: Book) => {
    const matchesTab = book.collectionId === activeTab;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.authors.some((a: Author) =>
        a.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    return searchQuery ? matchesSearch : matchesTab;
  });

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    onSelectCollection?.(id);
    setSearchQuery("");
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
            className="font-heading mx-auto mt-8 flex items-center gap-2 rounded-full bg-orange-700/90 px-8 py-3 text-lg font-medium text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-orange-700"
          >
            Explore The Library
            <ChevronDown className="h-4 w-4 animate-pulse" />
          </button>
        </div>
      </section>

      {/* Main Content Area */}

      <section
        id="library-content"
        className="relative z-20 mx-auto min-h-screen w-full max-w-7xl scroll-mt-32 px-4 py-20 md:px-8"
      >
        {/* Search Bar */}

        <div className="relative mx-auto mb-24 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by title, author, or interest..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);

                onSearch?.(e.target.value);
              }}
              className="font-body w-full rounded-full border border-stone-200 bg-white px-6 py-3 pl-14 text-base text-stone-900 shadow-sm transition-shadow placeholder:text-stone-400 hover:shadow-md focus:ring-1 focus:ring-orange-500/50 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100"
            />

            <Search className="absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-stone-400 transition-colors" />
          </div>
        </div>

        {/* Collections Tabs */}
        {!searchQuery && (
          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            {collections.map((collection: Collection) => (
              <button
                key={collection.id}
                onClick={() => handleTabChange(collection.id)}
                className={cn(
                  "font-heading rounded-full border px-6 py-2 text-lg font-medium transition-all duration-300",
                  activeTab === collection.id
                    ? "scale-105 transform border-stone-900 bg-stone-900 text-stone-50 shadow-md dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900"
                    : "border-stone-200 bg-transparent text-stone-500 hover:border-orange-300 hover:text-orange-600 dark:border-stone-800 dark:text-stone-400 dark:hover:text-orange-400",
                )}
              >
                {collection.name}
              </button>
            ))}
          </div>
        )}

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filteredBooks.map((book: Book) => (
              <BookCard
                key={book.id}
                book={book}
                onAddToCounter={onAddToCounter}
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
