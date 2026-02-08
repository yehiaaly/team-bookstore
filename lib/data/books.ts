import { BookDetail } from "@/types/book";

// Helper to generate Open Library cover URL
const getCover = (isbn: string) =>
  `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

export const SAMPLE_BOOKS: BookDetail[] = [
  {
    id: "bk-001",
    title: "Moby Dick; or, The Whale",
    subtitle: "The Arion Press Edition",
    price: 125.0,
    rating: 4.9,
    coverUrl:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200", // Keep custom art for the hero
    textureUrl:
      "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=1200",
    authors: [{ name: "Herman Melville" }],
    publisher: "Arion Press",
    year: 1979,
    description:
      "A typographic masterpiece. The definitive edition of the American sublime, bound in a deep ocean blue that feels like the Atlantic itself.",
    curatorLetter: {
      heading: "Dear Reader,",
      body: "We chose this edition not just for its rarity, but for its weight. When you hold this Arion Press edition, you feel the heft of the Pequod itself. The deep blue goatskin binding is cool to the touch, reminiscent of the Atlantic depths. It is not merely a story of a whale; it is a companion for your own voyages into the unknown. It demands patience, but offers a friendship that is vast, deep, and eternal.",
      signature: "Evelyn, Head Curator",
      date: "October 14, 2025",
    },
    personality: {
      duration: 95,
      focus: 90,
      environment: 85,
      density: 80,
    },
    physicalSpecs: {
      binding: "Full Blue Goatskin",
      paper: "Mohawk Superfine",
      dimensions: "10 x 15 inches",
      weight: "4.2 lbs",
      pages: 600,
    },
    isRare: true,
    curatorNote: "Keep out of direct sunlight to preserve the blue goatskin.",
  },
  {
    id: "bk-002",
    title: "Pride and Prejudice",
    price: 45.0,
    rating: 5.0,
    coverUrl: getCover("9780141192475"), // Penguin Clothbound
    textureUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200",
    authors: [{ name: "Jane Austen" }],
    publisher: "Penguin Clothbound",
    year: 2009,
    description:
      "The wit is as sharp as ever, but this clothbound edition brings a tactile warmth to the shelf that paperbacks simply cannot match.",
    curatorLetter: {
      heading: "Dearest Friend,",
      body: "There is no better remedy for a grey day than the sharp wit of Miss Austen. This clothbound edition feels like a warm cup of tea in your hands. It is reliable, beautiful, and endlessly comforting.",
      signature: "Evelyn, Head Curator",
      date: "Nov 2, 2025",
    },
    personality: {
      duration: 60,
      focus: 40,
      environment: 20, // Any environment
      density: 40,
    },
    physicalSpecs: {
      binding: "Embossed Cloth",
      paper: "Acid-free",
      dimensions: "5 x 8 inches",
      weight: "1.1 lbs",
      pages: 480,
    },
    isRare: false,
  },
  {
    id: "bk-003",
    title: "The Great Gatsby",
    subtitle: "First Edition Facsimile",
    price: 850.0,
    rating: 4.8,
    coverUrl: getCover("9780743273565"),
    textureUrl:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=1200",
    authors: [{ name: "F. Scott Fitzgerald" }],
    publisher: "Scribner's",
    year: 1925,
    description: "The Great American Novel in its original, tragic glory.",
    curatorLetter: {
      heading: "Old Sport,",
      body: "This facsimile brings you back to the Jazz Age. The dust jacket art is iconic, a weeping face in the night sky. It is a book about longing, and holding it feels like holding a piece of a dream that has passed.",
      signature: "Evelyn, Head Curator",
      date: "Sep 10, 2025",
    },
    personality: {
      duration: 40,
      focus: 70,
      environment: 90, // Late night
      density: 60,
    },
    physicalSpecs: {
      binding: "Hardcover with Dust Jacket",
      paper: "Cream Wove",
      dimensions: "5.5 x 8 inches",
      weight: "1.0 lbs",
      pages: 218,
    },
    isRare: true,
  },
  {
    id: "bk-004",
    title: "Frankenstein",
    price: 35.0,
    rating: 4.7,
    coverUrl: getCover("9780143131847"),
    textureUrl:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=1200",
    authors: [{ name: "Mary Shelley" }],
    publisher: "Penguin Classics",
    year: 1818,
    description: "The original science fiction nightmare.",
    curatorLetter: {
      heading: "Reviewer,",
      body: "A storm in book form. Read it when the wind is howling outside. This edition captures the raw, youthful energy of Shelley's original text.",
      signature: "Evelyn, Head Curator",
      date: "Oct 30, 2025",
    },
    personality: {
      duration: 55,
      focus: 80,
      environment: 95, // Stormy
      density: 70,
    },
    physicalSpecs: {
      binding: "Hardcover",
      paper: "Recycled",
      dimensions: "5 x 8 inches",
      weight: "0.9 lbs",
      pages: 280,
    },
    isRare: false,
  },
  {
    id: "bk-005",
    title: "The Brothers Karamazov",
    price: 55.0,
    rating: 4.9,
    coverUrl: getCover("9780374528379"),
    textureUrl:
      "https://images.unsplash.com/photo-1629196914168-3a9644338cfc?auto=format&fit=crop&q=80&w=1200",
    authors: [{ name: "Fyodor Dostoevsky" }],
    publisher: "FSG",
    year: 1880,
    description: "A philosophical cathedral of a novel.",
    curatorLetter: {
      heading: "Seeker,",
      body: "This is not a book; it is a life companion. It asks every hard question worth asking. The translation is lively, and the binding is built to withstand the years of re-reading this masterpiece requires.",
      signature: "Evelyn, Head Curator",
      date: "Dec 1, 2025",
    },
    personality: {
      duration: 100,
      focus: 100,
      environment: 100, // Quiet study
      density: 100,
    },
    physicalSpecs: {
      binding: "Cloth",
      paper: "Acid-free",
      dimensions: "6 x 9 inches",
      weight: "2.5 lbs",
      pages: 796,
    },
    isRare: false,
  },
  {
    id: "bk-006",
    title: "In Search of Lost Time",
    subtitle: "Volume 1: Swann's Way",
    price: 120.0,
    rating: 4.6,
    coverUrl: getCover("9780142437969"),
    textureUrl:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1200",
    authors: [{ name: "Marcel Proust" }],
    publisher: "Viking",
    year: 1913,
    description: "Memory, time, and the senses intertwined.",
    curatorLetter: {
      heading: "Dreamer,",
      body: "Lose yourself. The sentences flow like a river. This edition has margins wide enough for your own memories.",
      signature: "Evelyn, Head Curator",
      date: "Jan 5, 2026",
    },
    personality: {
      duration: 98,
      focus: 95,
      environment: 80, // Bedside
      density: 90,
    },
    physicalSpecs: {
      binding: "Boxed Set",
      paper: "Bible paper",
      dimensions: "5 x 8 inches",
      weight: "1.2 lbs",
      pages: 450,
    },
    isRare: true,
  },
  {
    id: "bk-007",
    title: "1984",
    price: 40.0,
    rating: 4.8,
    coverUrl: getCover("9780451524935"),
    textureUrl:
      "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?auto=format&fit=crop&q=80&w=1200",
    authors: [{ name: "George Orwell" }],
    publisher: "Signet",
    year: 1949,
    description: "The clock strikes thirteen.",
    curatorLetter: {
      heading: "Citizen,",
      body: "More relevant than ever. This edition is stark, simple, and terrifying. A necessary warning on your shelf.",
      signature: "Evelyn, Head Curator",
      date: "Feb 20, 2026",
    },
    personality: {
      duration: 60,
      focus: 75,
      environment: 60,
      density: 65,
    },
    physicalSpecs: {
      binding: "Hardcover",
      paper: "Standard",
      dimensions: "5 x 8 inches",
      weight: "0.8 lbs",
      pages: 328,
    },
    isRare: false,
  },
  {
    id: "bk-008",
    title: "Jane Eyre",
    price: 38.0,
    rating: 4.9,
    coverUrl: getCover("9780141441146"),
    textureUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1200",
    authors: [{ name: "Charlotte Brontë" }],
    publisher: "Penguin Classics",
    year: 1847,
    description: "Reader, I married him.",
    curatorLetter: {
      heading: "Spirit,",
      body: "For the independent soul. Jane's voice is clear and uncompromising. This edition honors her quiet fire.",
      signature: "Evelyn, Head Curator",
      date: "Mar 8, 2026",
    },
    personality: {
      duration: 70,
      focus: 60,
      environment: 50,
      density: 50,
    },
    physicalSpecs: {
      binding: "Paperback",
      paper: "Recycled",
      dimensions: "5 x 8 inches",
      weight: "1.0 lbs",
      pages: 532,
    },
    isRare: false,
  },
];

export async function getBookById(id: string): Promise<BookDetail | null> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return SAMPLE_BOOKS.find((b) => b.id === id) || null;
}
