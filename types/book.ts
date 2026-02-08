export interface Author {
  name: string;
}

export interface CuratorLetter {
  heading: string;
  body: string;
  signature: string;
  date: string;
}

export interface Personality {
  duration: number; // 0 (Short) - 100 (Long)
  focus: number; // 0 (Easy Pause) - 100 (Uninterruptible)
  environment: number; // 0 (Commute) - 100 (Quiet Corner)
  density: number; // 0 (Skim) - 100 (Deep Dive)
}

export interface PhysicalSpecs {
  binding: string;
  paper: string;
  dimensions: string;
  weight: string;
  pages: number;
}

export interface BookDetail {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  rating: number;
  coverUrl: string;
  textureUrl: string; // Close-up of binding
  authors: Author[];
  publisher: string;
  year: number;
  description: string;
  curatorLetter: CuratorLetter;
  personality: Personality;
  physicalSpecs: PhysicalSpecs;
  isRare: boolean;
  curatorNote?: string | null;
}

export interface BookCompanionProps {
  /** The book to display in detail */
  book: BookDetail;

  /** Called when user wants to purchase */
  onAddToCounter?: (id: string) => void;

  /** Called when user wants to save to wishlist */
  onAddToWishlist?: (id: string) => void;

  /** Called when user wants to return to the library */
  onBack?: () => void;
}
