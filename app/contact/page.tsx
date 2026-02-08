import { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Team Bookstore. We'd love to hear from you about book inquiries, partnerships, or any questions.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-heading mb-8 text-center text-4xl font-bold text-stone-900 dark:text-stone-100">
        Contact Us
      </h1>

      <section className="mb-12 text-center">
        <p className="mx-auto max-w-2xl text-lg text-stone-600 dark:text-stone-300">
          Have a question about a book, want to suggest a title, or interested
          in partnering with us? We&apos;d love to hear from you.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl bg-stone-100 p-6 text-center dark:bg-stone-800">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900">
            <Mail className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          </div>
          <h2 className="font-heading mb-2 text-xl font-semibold text-stone-900 dark:text-stone-100">
            Email
          </h2>
          <p className="text-stone-600 dark:text-stone-400">
            hello@teambookstore.com
          </p>
        </div>

        <div className="rounded-2xl bg-stone-100 p-6 text-center dark:bg-stone-800">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900">
            <MapPin className="h-6 w-6 text-rose-600 dark:text-rose-400" />
          </div>
          <h2 className="font-heading mb-2 text-xl font-semibold text-stone-900 dark:text-stone-100">
            Location
          </h2>
          <p className="text-stone-600 dark:text-stone-400">
            Online — Serving book lovers worldwide
          </p>
        </div>

        <div className="rounded-2xl bg-stone-100 p-6 text-center dark:bg-stone-800">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900">
            <Clock className="h-6 w-6 text-sky-600 dark:text-sky-400" />
          </div>
          <h2 className="font-heading mb-2 text-xl font-semibold text-stone-900 dark:text-stone-100">
            Response Time
          </h2>
          <p className="text-stone-600 dark:text-stone-400">
            We typically respond within 24 hours
          </p>
        </div>
      </div>

      <section className="mt-16 rounded-2xl bg-amber-50 p-8 text-center dark:bg-amber-950">
        <h2 className="font-heading mb-4 text-2xl font-bold text-stone-900 dark:text-stone-100">
          Looking for a Specific Book?
        </h2>
        <p className="mx-auto max-w-2xl text-stone-700 dark:text-stone-300">
          Can&apos;t find what you&apos;re looking for in our library? Send us
          an email with your book request, and our curation team will do their
          best to track it down for you.
        </p>
      </section>
    </article>
  );
}
