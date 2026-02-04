import type { BookCompanionProps } from "@/../src/sections/book-companion/types";
import { ArrowLeft, Heart, ShoppingBag, Feather } from "lucide-react";
import { TraitRange } from "./TraitRange";

export function BookCompanion({
  book,
  onAddToCounter,
  onAddToWishlist,
  onBack,
}: BookCompanionProps) {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-body selection:bg-orange-100 dark:selection:bg-orange-900">
      {/* Navigation (Minimal Standalone) */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
        <button
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md rounded-full shadow-sm text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-all hover:pl-3 group border border-stone-200/50 dark:border-stone-800/50"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-heading text-sm font-medium">
            Back to Library
          </span>
        </button>

        <button
          onClick={() => onAddToWishlist?.(book.id)}
          className="pointer-events-auto p-3 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md rounded-full shadow-sm text-stone-400 hover:text-red-500 transition-colors border border-stone-200/50 dark:border-stone-800/50"
        >
          <Heart className="w-5 h-5" />
        </button>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left: The Tangible Hero (Image) */}
        <div className="relative h-[50vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden bg-stone-200 dark:bg-stone-900">
          <img
            src={book.textureUrl}
            alt="Binding Texture"
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-[20s] hover:scale-110 ease-linear"
          />
          <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 to-transparent lg:hidden" />

          {/* Overlay Title for Mobile */}
          <div className="absolute bottom-8 left-6 right-6 lg:hidden text-white">
            <h1 className="font-heading text-4xl font-bold leading-tight mb-2">
              {book.title}
            </h1>
            <p className="font-mono text-sm opacity-80">
              {book.authors.map((a) => a.name).join(", ")}
            </p>
          </div>
        </div>

        {/* Right: The Artifact (Content) */}
        <div className="relative px-6 py-12 lg:p-20 lg:pt-32 max-w-2xl mx-auto">
          {/* Header (Desktop) */}
          <div className="hidden lg:block mb-12 animate-in slide-in-from-bottom-8 duration-700">
            <p className="font-mono text-sm text-orange-600 dark:text-orange-500 mb-4 tracking-wider uppercase">
              {book.publisher} • {book.year}
            </p>
            <h1 className="font-heading text-6xl font-bold leading-tight mb-4 text-stone-900 dark:text-stone-50">
              {book.title}
            </h1>
            <p className="font-body text-xl text-stone-500 dark:text-stone-400">
              by{" "}
              <span className="text-stone-800 dark:text-stone-200">
                {book.authors.map((a) => a.name).join(", ")}
              </span>
            </p>
            {book.subtitle && (
              <p className="mt-2 text-stone-400 dark:text-stone-500 italic font-heading">
                {book.subtitle}
              </p>
            )}
          </div>

          {/* Curator's Letter */}
          <div className="relative mb-16 p-8 bg-stone-100 dark:bg-stone-900 rounded-sm border border-stone-200 dark:border-stone-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)] dark:shadow-none animate-in slide-in-from-bottom-10 duration-1000 delay-100">
            <Feather className="absolute -top-3 -left-3 w-8 h-8 text-stone-300 dark:text-stone-700 rotate-12 bg-stone-50 dark:bg-stone-950 rounded-full p-1 border border-stone-200 dark:border-stone-800" />
            <div className="font-heading italic text-stone-700 dark:text-stone-300 leading-relaxed text-lg">
              <p className="mb-4 font-bold not-italic text-stone-900 dark:text-stone-100 text-sm uppercase tracking-widest font-mono">
                From the Curator
              </p>
              <p className="mb-4">"{book.curatorLetter.body}"</p>
              <div className="flex justify-end mt-6">
                <div className="text-right">
                  <p className="font-bold text-stone-900 dark:text-stone-100 not-italic">
                    {book.curatorLetter.signature}
                  </p>
                  <p className="text-xs font-mono not-italic text-stone-400">
                    {book.curatorLetter.date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Friendship Personality (Now Reader Experience) */}
          <div className="mb-16 animate-in slide-in-from-bottom-12 duration-1000 delay-200">
            <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
              Reading Experience
              <span className="text-xs font-mono font-normal bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded text-stone-500">
                Compatibility Check
              </span>
            </h3>
            <div className="space-y-6">
              <TraitRange
                labelLeft="Short Reads"
                labelRight="Long Reads"
                value={book.personality.duration}
              />
              <TraitRange
                labelLeft="Easy Pause"
                labelRight="Uninterruptible"
                value={book.personality.focus}
              />
              <TraitRange
                labelLeft="Commute Ready"
                labelRight="Quiet Corner"
                value={book.personality.environment}
              />
              <TraitRange
                labelLeft="Quick Skim"
                labelRight="Deep Dive"
                value={book.personality.density}
              />
            </div>
          </div>

          {/* The Artifact Specs */}
          <div className="mb-24 animate-in slide-in-from-bottom-12 duration-1000 delay-300">
            <h3 className="font-heading text-2xl font-bold mb-6">
              The Artifact
            </h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <SpecItem label="Binding" value={book.physicalSpecs.binding} />
              <SpecItem label="Paper" value={book.physicalSpecs.paper} />
              <SpecItem
                label="Dimensions"
                value={book.physicalSpecs.dimensions}
              />
              <SpecItem label="Weight" value={book.physicalSpecs.weight} />
              <SpecItem
                label="Pages"
                value={book.physicalSpecs.pages.toString()}
              />
              <SpecItem
                label="Rarity"
                value={book.isRare ? "High / Rare" : "Standard"}
              />
            </div>
          </div>

          {/* Sticky Footer Action */}
          <div className="sticky bottom-6 z-40 animate-in fade-in duration-1000 delay-500">
            <div className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-stone-200/50 dark:border-stone-800/50 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold text-stone-900 dark:text-stone-100">
                  ${book.price.toFixed(2)}
                </span>
                <span className="text-xs text-stone-500 font-mono uppercase">
                  Includes Shipping
                </span>
              </div>
              <button
                onClick={() => onAddToCounter?.(book.id)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-heading font-medium text-lg transition-all hover:scale-105 shadow-lg shadow-orange-900/20 flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Invite Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-stone-200 dark:border-stone-800 pl-4">
      <p className="text-xs font-mono text-stone-400 uppercase mb-1">{label}</p>
      <p className="font-body font-medium text-stone-700 dark:text-stone-300">
        {value}
      </p>
    </div>
  );
}
