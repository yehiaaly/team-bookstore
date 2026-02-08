import { Metadata } from "next";
import Image from "next/image";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Team Bookstore, our mission to curate rare and timeless books, and the passionate team behind our literary collection.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto max-w-4xl space-y-24 px-4 py-20">
        {/* Hero Section */}
        <section className="my-40 space-y-8 text-center">
          <h1 className="font-heading text-foreground text-5xl leading-tight font-bold md:text-6xl">
            About Team Books
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl leading-relaxed md:text-2xl">
            We believe in the enduring power of the physical book and the
            community it creates.
          </p>
        </section>

        {/* Minimalist Our Story */}
        <section className="grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-heading text-4xl font-bold">Our Mission</h2>
            <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
              <p>
                In a world that is increasingly digital, we stand firm in our
                commitment to the tangible. Team Books is more than just a
                bookstore; it&apos;s a sanctuary for those who cherish the
                weight of a volume in their hands and the smell of ink on paper.
              </p>
              <p>
                We curate our collection with intention, ensuring that every
                title on our shelves has earned its place through merit, beauty,
                or profundity.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative h-32 w-32">
              {/* Using /icon as the source, assuming app/icon.svg is served at this path */}
              <Image
                src="/icon.svg"
                alt="Team Books Icon"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-heading text-2xl font-bold">Team Books</span>
          </div>
        </section>

        {/* Core Values - The Typesetter's Manifesto */}
        <section className="relative py-24">
          <div className="bg-primary/5 pointer-events-none absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[100px]" />

          <div className="relative space-y-20">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <span className="text-primary font-mono text-sm tracking-widest uppercase">
                The Typesetter&apos;s Manifesto
              </span>
              <h2 className="font-heading text-foreground text-5xl leading-tight font-bold md:text-6xl">
                Principles Set in{" "}
                <span className="text-primary italic">Lead</span> &{" "}
                <span className="text-primary italic">Ink</span>
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-xl leading-relaxed">
                In an age of infinite scrolling, we choose the definitive end of
                a page.
              </p>
            </div>

            <div className="grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-12">
              {/* Item 1: Curated, Not Computed (The Review Slip) */}
              <div className="group relative md:col-span-7">
                <div className="absolute inset-0 rotate-1 transform rounded-sm border border-stone-200 bg-stone-100 shadow-sm transition-transform duration-500 group-hover:rotate-2 dark:border-stone-800 dark:bg-stone-900" />
                <div className="bg-card border-primary relative flex h-full flex-col justify-between overflow-hidden border-l-4 p-10 shadow-lg transition-all duration-500 hover:shadow-xl">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="font-heading text-9xl leading-none">
                      1
                    </span>
                  </div>
                  <div className="relative z-10 space-y-6">
                    <div className="text-primary/80 border-primary/20 flex w-fit items-center gap-3 border-b pb-4">
                      <span className="text-2xl">§</span>
                      <span className="font-mono text-sm tracking-wider uppercase">
                        Human Selection
                      </span>
                    </div>
                    <h3 className="font-heading text-4xl leading-tight font-bold">
                      Curated, Not Computed
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Algorithms optimize for engagement; we optimize for soul.
                      Every title here has been weighed, read, and championed by
                      a person who loves books. We believe the best
                      recommendation comes from a pulse, not a processor.
                    </p>
                  </div>
                  <div className="border-border mt-8 flex items-end justify-end border-t border-dashed pt-6">
                    <span className="text-muted-foreground/60 font-mono text-xs">
                      EST. 2024
                    </span>
                  </div>
                </div>
              </div>

              {/* Item 2: The Object Matters (The Tactile Card) */}
              <div className="group relative md:col-span-5">
                <div className="bg-secondary/30 border-secondary/50 group-hover:border-primary/20 relative h-full overflow-hidden rounded-3xl border p-10 transition-all duration-500 hover:shadow-xl dark:bg-stone-900">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80"
                      alt="Antique book texture"
                      fill
                      className="object-cover opacity-20 transition-transform duration-700 group-hover:scale-105 dark:opacity-10"
                    />
                    <div className="from-background/90 via-background/60 to-background/30 absolute inset-0 bg-linear-to-t mix-blend-overlay" />
                    <div className="bg-secondary/10 absolute inset-0 mix-blend-multiply" />
                  </div>

                  <div className="relative z-10 flex h-full min-h-55 flex-col justify-start space-y-6">
                    <h3 className="font-heading text-foreground text-3xl font-bold drop-shadow-sm">
                      The Object Matters
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                      We celebrate the weight, the grain, and the scent of
                      paper. A book is an artifact of thought that outlasts the
                      digital feed. It deserves to be beautiful.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3: Sanctuary for the Mind (Minimalist) */}
              <div className="group relative overflow-hidden md:col-span-12">
                <div className="absolute inset-0 flex flex-col items-center gap-12 rounded-2xl bg-stone-900 p-12 text-stone-50 shadow-2xl md:flex-row md:p-16">
                  <div className="via-primary absolute top-0 left-0 h-1 w-full bg-linear-to-r from-transparent to-transparent opacity-50"></div>

                  <div className="relative z-10 flex-1 space-y-6 text-center md:text-left">
                    <div className="mb-2 inline-block rounded-full border border-stone-700 px-4 py-1 font-mono text-xs tracking-widest text-stone-400 uppercase">
                      Principle 03
                    </div>
                    <h3 className="font-heading text-4xl font-bold text-white md:text-5xl">
                      Sanctuary for the Mind
                    </h3>
                    <p className="max-w-2xl text-xl leading-relaxed text-stone-400">
                      The world is loud. We cultivate quiet. Team Books is
                      designed to be a pause—a space for deep thought, chance
                      encounters, and the slow, deliberate art of browsing.
                    </p>
                  </div>

                  <div className="relative h-48 w-48 shrink-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100 md:h-64 md:w-64">
                    {/* Abstract representation of 'Quiet' */}
                    <div className="absolute inset-0 animate-[spin_12s_linear_infinite] rounded-full border border-stone-800" />
                    <div className="absolute inset-4 animate-[spin_16s_linear_infinite_reverse] rounded-full border border-stone-700" />
                    <div className="border-primary/20 absolute inset-8 animate-[spin_20s_linear_infinite] rounded-full border" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-heading text-6xl text-stone-800 italic select-none">
                        Quiet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
