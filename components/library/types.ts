// =============================================================================
// Data Types
// =============================================================================

export interface Author {
  name: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  rating: number; // 0-5 stars
  coverUrl: string;
  authors: Author[];
  publisher: string;
  binding: string;
  categories: string[];
  collectionId?: string; // Links to a specific collection (Curator's Choice, etc.)
  curatorNote?: string | null; // "Why we picked it" - only for some items
  isRare: boolean;
  isCuratorsChoice?: boolean;
}

// =============================================================================
// Component Props
// =============================================================================

export interface TheLibraryProps {
  /** The full list of books available in the library */
  books: Book[];

  /** Called when user adds a book to the counter (cart) */
  onAddToCounter?: (bookId: string) => void;

  /** Called when user wants to add to wishlist */
  onAddToWishlist?: (bookId: string) => void;

  /** Called when user wants to explore a book companion (view details) */
  onExploreCompanion?: (bookId: string) => void;

  /** Called when user performs a search */
  onSearch?: (query: string) => void;
}
