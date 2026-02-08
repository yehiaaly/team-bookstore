import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions that govern your use of Team Bookstore. Understand your rights and responsibilities.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading mb-8 text-4xl font-bold text-stone-900 dark:text-stone-100">
        Terms of Service
      </h1>
      <p className="mb-4 text-sm text-stone-500 dark:text-stone-400">
        Last updated: February 8, 2026
      </p>

      <section className="prose prose-stone dark:prose-invert max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Team Bookstore, you accept and agree to be
          bound by these Terms of Service. If you do not agree to these terms,
          please do not use our services.
        </p>

        <h2>2. Use of Service</h2>
        <p>
          You agree to use our service only for lawful purposes and in
          accordance with these Terms. You are responsible for maintaining the
          confidentiality of your account and password.
        </p>

        <h2>3. Products and Pricing</h2>
        <p>
          All products are subject to availability. Prices are subject to change
          without notice. We reserve the right to limit quantities and to refuse
          or cancel any order.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and
          images, is the property of Team Bookstore and is protected by
          copyright laws. You may not reproduce, distribute, or create
          derivative works without our express written permission.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          Team Bookstore shall not be liable for any indirect, incidental,
          special, or consequential damages arising from your use of our
          services or any products purchased through our website.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with
          applicable laws, without regard to conflict of law principles.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will
          be effective immediately upon posting to our website. Your continued
          use of the service constitutes acceptance of the modified terms.
        </p>

        <h2>8. Contact</h2>
        <p>
          For questions about these Terms, please contact us at
          legal@teambookstore.com.
        </p>
      </section>
    </article>
  );
}
