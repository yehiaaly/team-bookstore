import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Team Bookstore collects, uses, and protects your personal information. Read our complete privacy policy.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading mb-8 text-4xl font-bold text-stone-900 dark:text-stone-100">
        Privacy Policy
      </h1>
      <p className="mb-4 text-sm text-stone-500 dark:text-stone-400">
        Last updated: February 8, 2026
      </p>

      <section className="prose prose-stone dark:prose-invert max-w-none">
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you
          create an account, make a purchase, or contact us for support. This
          may include your name, email address, shipping address, and payment
          information.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to process transactions, send you
          order confirmations, respond to your inquiries, and improve our
          services. We may also use your information to send you promotional
          communications about new books and special offers.
        </p>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We may share your information with trusted service providers
          who assist us in operating our website and conducting our business,
          provided they agree to keep this information confidential.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information against unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the Internet is
          100% secure.
        </p>

        <h2>5. Cookies</h2>
        <p>
          We use cookies to enhance your browsing experience, analyze site
          traffic, and personalize content. You can choose to disable cookies
          through your browser settings.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal
          information. To exercise these rights, please contact us at
          privacy@teambookstore.com.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at privacy@teambookstore.com.
        </p>
      </section>
    </article>
  );
}
