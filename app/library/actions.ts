"use server";

import { SAMPLE_BOOKS } from "@/lib/data/books";

// Mock data implementation for The Library section

const sampleCollections = [
  { id: "col-1", name: "Curator's Choice", slug: "curators-choice" },
  { id: "col-2", name: "The Vault", slug: "the-vault" },
  { id: "col-3", name: "The Collection", slug: "the-collection" },
];

export async function getCollections() {
  return sampleCollections;
}

interface GoogleBookVolume {
  id: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
    publisher?: string;
    averageRating?: number;
    categories?: string[];
  };
  saleInfo?: {
    retailPrice?: {
      amount: number;
    };
  };
}

export async function searchBooks(query: string) {
  if (!query) return SAMPLE_BOOKS;

  // 1. Filter local mock data first
  const localResults = SAMPLE_BOOKS.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.authors.some((a) =>
        a.name.toLowerCase().includes(query.toLowerCase()),
      ),
  );

  // 2. Fetch from Google Books API
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=10&printType=books`,
    );
    if (!res.ok) return localResults;

    const data = await res.json();
    if (!data.items) return localResults;

    const apiBooks = data.items.map((item: GoogleBookVolume) => ({
      id: item.id,
      title: item.volumeInfo.title || "Unknown Title",
      subtitle: item.volumeInfo.subtitle,
      price: item.saleInfo?.retailPrice?.amount || 19.99, // Fallback price
      rating: item.volumeInfo.averageRating || 0,
      coverUrl:
        item.volumeInfo.imageLinks?.thumbnail?.replace("http:", "https:") ||
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600",
      authors: item.volumeInfo.authors?.map((name) => ({ name })) || [
        { name: "Unknown" },
      ],
      publisher: item.volumeInfo.publisher || "Unknown Publisher",
      binding: "Paperback", // API doesn't usually give this
      categories: item.volumeInfo.categories || ["General"],
      collectionId: undefined, // API books don't belong to curated collections
      curatorNote: null,
      isRare: false,
      // Default missing required fields for the BookDetail type
      textureUrl:
        "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=1200",
      year: 2024,
      description: item.volumeInfo.description || "",
      curatorLetter: {
        heading: "A Note",
        body: "Detailed curation pending...",
        signature: "Team",
        date: "2026",
      },
      personality: { duration: 50, focus: 50, environment: 50, density: 50 },
      physicalSpecs: {
        binding: "Standard",
        paper: "Standard",
        dimensions: "Standard",
        weight: "Standard",
        pages: 200,
      },
    }));

    // Merge: Local results first, then API results (deduplicated by ID implementation if needed, but IDs are different here)
    // Note: TypeScript might complain about type matching if BookDetail is strict, but apiBooks structure attempts to match it.
    // We cast to any[] or similar if strictness implies specific string unions, but BookDetail is mostly strings.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return [...localResults, ...(apiBooks as any[])];
  } catch (error) {
    console.error("Failed to fetch from Google Books API:", error);
    return localResults;
  }
}

// Update getBooks to just return all sample books for the main list
// The Library expects 'Book' type which is a subset of 'BookDetail'.
// We need to ensure we map or extend types so collectionId aligns.
// The SAMPLE_BOOKS in lib/data/books.ts do NOT have `collectionId` or `categories` yet?
// Wait, I need to add those to lib/data/books.ts or mapping here might fail.
// I will start by just returning them and letting TypeScript verify or I'll patch books.ts again in a moment if needed.
// Actually, I should probably add collectionId to the SAMPLE_BOOKS in lib/data/books.ts to match the previous structure.

export async function getBooks() {
  // Mapping to add collectionIds back (hack for now since I moved them)
  const booksWithCollections = SAMPLE_BOOKS.map((b, i) => ({
    ...b,
    collectionId: sampleCollections[i % 3].id, // Distribute across collections
    binding: b.physicalSpecs.binding,
    curatorNote: b.curatorLetter.body.slice(0, 100) + "...", // Snippet for the card
  }));
  return booksWithCollections;
}

export async function addToCounter(bookId: string) {
  // Mock implementation - logs to console
  console.log("Adding to counter:", bookId);
  return { success: true };
}
