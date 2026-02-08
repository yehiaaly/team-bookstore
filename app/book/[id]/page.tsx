import { notFound } from "next/navigation";
import { getAllBooks, getBookById } from "@/lib/data/books";
import { BookCompanionClient } from "./client";
import PageTransition from "@/components/ui/PageTransition";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const books = await getAllBooks();
  return books.map((book) => ({
    id: book.id,
  }));
}

export default async function BookPage({ params }: PageProps) {
  const { id } = await params;
  const book = await getBookById(id);

  if (!book) {
    notFound();
  }

  return (
    <PageTransition>
      <BookCompanionClient book={book} />
    </PageTransition>
  );
}
