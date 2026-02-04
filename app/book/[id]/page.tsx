import { notFound } from "next/navigation";
import { getBookById } from "@/lib/data/books";
import { BookCompanionClient } from "./client";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BookPage({ params }: PageProps) {
  const { id } = await params;
  const book = await getBookById(id);

  if (!book) {
    notFound();
  }

  return <BookCompanionClient book={book} />;
}
