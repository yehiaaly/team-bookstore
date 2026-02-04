import { useState } from "react";
import type { TheLibraryProps } from "../types";
import { BookCard } from "./BookCard";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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

  // Filter books based on active tab and search query
  // In a real app, this filtering might happen on the backend or via props
  // adhering to the "dumb component" philosophy, but doing client-side here for the prototype feel.
  const filteredBooks = books.filter((book) => {
    const matchesTab = book.collectionId === activeTab;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.authors.some((a) =>
        a.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    // If searching, ignore tabs. If not searching, respect tabs.
    return searchQuery ? matchesSearch : matchesTab;
  });

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    onSelectCollection?.(id);
    setSearchQuery(""); // Clear search when switching tabs
  };

  return (
        <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
          {/* Hero Section */}
          <section className="relative h-[85vh] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden -mt-28 bg-stone-900">
            
            {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4 pt-40">

                  <div className="inline-block px-3 py-1 mb-4 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm text-white/90 text-[10px] font-mono tracking-[0.2em] uppercase">

                    Est. 2026 • Curated with Care

                  </div>

                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight drop-shadow-sm leading-tight">

                    Find Your Next <br />

                    <span className="text-orange-100 italic font-normal">True Companion.</span>

                  </h1>

                  <p className="font-body text-lg text-stone-200 max-w-xl mx-auto leading-relaxed drop-shadow-md font-light">

                    Escape the algorithms. Discover distinct voices, quality bindings, and stories selected by humans, for humans.

                  </p>

        

                  <button

                    onClick={() => document.getElementById('library-content')?.scrollIntoView({ behavior: 'smooth' })}

                    className="mt-8 px-8 py-3 bg-orange-700/90 hover:bg-orange-700 text-white rounded-full font-heading font-medium text-lg transition-all hover:scale-105 shadow-lg backdrop-blur-sm flex items-center gap-2 mx-auto"

                  >

                    Explore The Library

                    <ChevronDown className="h-4 w-4 animate-pulse" />

                  </button>

                </div>

              </section>

        

              {/* Main Content Area */}

              <section id="library-content" className="relative z-20 py-20 px-4 md:px-8 max-w-7xl mx-auto">

                

                {/* Search Bar */}

                <div className="relative max-w-xl mx-auto mb-16">

                    <div className="relative">

                      <input

                        type="text"

                        placeholder="Search by title, author, or interest..."

                        value={searchQuery}

                        onChange={(e) => {

                          setSearchQuery(e.target.value);

                          onSearch?.(e.target.value);

                        }}

                        className="w-full px-6 py-3 pl-14 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:ring-1 focus:ring-orange-500/50 text-base font-body shadow-sm transition-shadow hover:shadow-md"

                      />

                      <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400 transition-colors" />

                    </div>

                </div>

        {/* Collections Tabs */}
        {!searchQuery && (
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {collections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => handleTabChange(collection.id)}
                className={cn(
                  "px-6 py-2 rounded-full font-heading font-medium text-lg transition-all duration-300 border",
                  activeTab === collection.id
                    ? "bg-stone-900 text-stone-50 border-stone-900 dark:bg-stone-100 dark:text-stone-900 dark:border-stone-100 shadow-md transform scale-105"
                    : "bg-transparent text-stone-500 border-stone-200 dark:text-stone-400 dark:border-stone-800 hover:border-orange-300 hover:text-orange-600 dark:hover:text-orange-400",
                )}
              >
                {collection.name}
              </button>
            ))}
          </div>
        )}

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onAddToCounter={onAddToCounter}
                onExploreCompanion={onExploreCompanion}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-heading text-2xl text-stone-400 mb-2">
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
