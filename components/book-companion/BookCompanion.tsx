import Image from "next/image";
import type { BookCompanionProps } from "@/types/book";
import { ArrowLeft, Heart, ShoppingBag, Feather } from "lucide-react";
import { TraitRange } from "./TraitRange";

export function BookCompanion({
  book,
  onAddToCounter,
  onAddToWishlist,
  onBack,
}: BookCompanionProps) {
  return (
    <div className="font-body min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 dark:bg-stone-950 dark:text-stone-100 dark:selection:bg-orange-900">
      {/* Navigation (Minimal Standalone) */}
      <nav className="pointer-events-none fixed top-0 right-0 left-0 z-50 flex items-center justify-between p-6">
        <button
          onClick={onBack}
          className="group pointer-events-auto flex items-center gap-2 rounded-full border border-stone-200/50 bg-white/80 px-4 py-2 text-stone-600 shadow-sm backdrop-blur-md transition-all hover:pl-3 hover:text-stone-900 dark:border-stone-800/50 dark:bg-stone-900/80 dark:text-stone-300 dark:hover:text-stone-100"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-heading text-sm font-medium">
            Back to Library
          </span>
        </button>

        <button
          onClick={() => onAddToWishlist?.(book.id)}
          className="pointer-events-auto rounded-full border border-stone-200/50 bg-white/80 p-3 text-stone-400 shadow-sm backdrop-blur-md transition-colors hover:text-red-500 dark:border-stone-800/50 dark:bg-stone-900/80"
        >
          <Heart className="h-5 w-5" />
        </button>
      </nav>

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left: The Tangible Hero (Image) */}
        <div className="relative h-[50vh] overflow-hidden bg-stone-200 lg:sticky lg:top-0 lg:h-screen dark:bg-stone-900">
          <Image
            src={book.textureUrl}
            alt="Binding Texture"
            fill
            className="object-cover opacity-90 transition-transform duration-[20s] ease-linear hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 to-transparent lg:hidden" />

          {/* Overlay Title for Mobile */}
          <div className="absolute right-6 bottom-8 left-6 text-white lg:hidden">
            <h1 className="font-heading mb-2 text-4xl leading-tight font-bold">
              {book.title}
            </h1>
            <p className="font-mono text-sm opacity-80">
              {book.authors.map((a) => a.name).join(", ")}
            </p>
          </div>
        </div>

        {/* Right: The Artifact (Content) */}
        <div className="relative mx-auto max-w-2xl px-6 py-12 lg:p-20 lg:pt-32">
          {/* Header (Desktop) */}
          <div className="animate-in slide-in-from-bottom-8 mb-12 hidden duration-700 lg:block">
            <p className="mb-4 font-mono text-sm tracking-wider text-orange-600 uppercase dark:text-orange-500">
              {book.publisher} • {book.year}
            </p>
            <h1 className="font-heading mb-4 text-6xl leading-tight font-bold text-stone-900 dark:text-stone-50">
              {book.title}
            </h1>
            <p className="font-body text-xl text-stone-500 dark:text-stone-400">
              by{" "}
              <span className="text-stone-800 dark:text-stone-200">
                {book.authors.map((a) => a.name).join(", ")}
              </span>
            </p>
            {book.subtitle && (
              <p className="font-heading mt-2 text-stone-400 italic dark:text-stone-500">
                {book.subtitle}
              </p>
            )}
          </div>

          {/* Curator's Letter */}
          <div className="animate-in slide-in-from-bottom-10 relative mb-16 rounded-sm border border-stone-200 bg-stone-100 p-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)] delay-100 duration-1000 dark:border-stone-800 dark:bg-stone-900 dark:shadow-none">
            <Feather className="absolute -top-3 -left-3 h-8 w-8 rotate-12 rounded-full border border-stone-200 bg-stone-50 p-1 text-stone-300 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-700" />
            <div className="font-heading text-lg leading-relaxed text-stone-700 italic dark:text-stone-300">
              <p className="mb-4 font-mono text-sm font-bold tracking-widest text-stone-900 uppercase not-italic dark:text-stone-100">
                From the Curator
              </p>
              <p className="mb-4">&quot;{book.curatorLetter.body}&quot;</p>
              <div className="mt-6 flex justify-end">
                <div className="text-right">
                  <p className="font-bold text-stone-900 not-italic dark:text-stone-100">
                    {book.curatorLetter.signature}
                  </p>
                  <p className="font-mono text-xs text-stone-400 not-italic">
                    {book.curatorLetter.date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Friendship Personality (Now Reader Experience) */}
          <div className="animate-in slide-in-from-bottom-12 mb-16 delay-200 duration-1000">
            <h3 className="font-heading mb-6 flex items-center gap-3 text-2xl font-bold">
              Reading Experience
              <span className="rounded bg-stone-100 px-2 py-1 font-mono text-xs font-normal text-stone-500 dark:bg-stone-800">
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
          <div className="animate-in slide-in-from-bottom-12 mb-24 delay-300 duration-1000">
            <h3 className="font-heading mb-6 text-2xl font-bold">
              The Artifact
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
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
          <div className="animate-in fade-in sticky bottom-6 z-40 delay-500 duration-1000">
            <div className="flex items-center justify-between rounded-2xl border border-stone-200/50 bg-white/90 p-4 shadow-xl backdrop-blur-md dark:border-stone-800/50 dark:bg-stone-900/90">
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold text-stone-900 dark:text-stone-100">
                  ${book.price.toFixed(2)}
                </span>
                <span className="font-mono text-xs text-stone-500 uppercase">
                  Includes Shipping
                </span>
              </div>
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
              <button
                onClick={() => onAddToCounter?.(book.id)}
                className="font-heading flex items-center gap-2 rounded-full bg-orange-600 px-8 py-3 text-lg font-medium text-white shadow-lg shadow-orange-900/20 transition-all hover:scale-105 hover:bg-orange-700"
              >
                <ShoppingBag className="h-5 w-5" />
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
    <div className="border-l-2 border-stone-200 pl-4 dark:border-stone-800">
      <p className="mb-1 font-mono text-xs text-stone-400 uppercase">{label}</p>
      <p className="font-body font-medium text-stone-700 dark:text-stone-300">
        {value}
      </p>
    </div>
  );
}
