# 📚 Team Bookstore

A modern, curated digital library bookstore built with Next.js, featuring a serene interface for discovering quality books. This project emphasizes a premium user experience with smooth transitions, thoughtful typography, and a "human-curated" feel.

```carousel
![Hero Section - Find Your Next True Companion](/preview-hero.png)
<!-- slide -->
![Counter Page - The Stack & Guestbook](/preview-counter.png)
<!-- slide -->
![About Page - The Typesetter's Manifesto](/preview-about.png)
```

## 🚀 Live Demo

Check out the live demo here: [Come back soon!](https://team-bookstore.vercel.app/)

## ✨ Features

- **Curated Collections**: Browse "Top Picks" and "Rare Finds" selected by humans, not algorithms.
- **Smooth Animations**: Seamless page transitions and micro-interactions powered by Framer Motion.
- **Wishlist & Cart**: Interactive "Add to Counter" (Cart) and "Add to Favorites" functionality.
- **Responsive Design**: A fully responsive layout that looks great on mobile, tablet, and desktop.
- **Dark Mode**: A carefully crafted dark theme for comfortable night-time browsing.
- **Search & Filtering**: Instant search by title or author, with dynamic filtering capabilities.

## 🛠️ Built With

- **[React 19](https://react.dev/)**: The library for web and native user interfaces.
- **[Next.js 15](https://nextjs.org/)**: The React Framework for the Web.
- **[Tailwind CSS](https://tailwindcss.com/)**: Rapidly build modern websites without ever leaving your HTML.
- **[Framer Motion](https://www.framer.com/motion/)**: A production-ready motion library for React.
- **[Shadcn UI](https://ui.shadcn.com/)**: Beautifully designed components accessible and customizable.
- **[Lucide React](https://lucide.dev/)**: Beautiful & consistent icon toolkit.

## 🏁 Getting Started

Follow these steps to get the project running locally.

### Prerequisites

- Node.js 18+ installed
- npm, pnpm, or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/team-bookstore.git
    cd team-bookstore
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    # or
    pnpm dev
    # or
    yarn dev
    ```

4.  **Open your browser**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📖 Documentation

### Directory Structure

```text
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── library/          # Library page
│   ├── book/             # Book details
│   ├── settings/         # User settings
│   └── ...
├── components/           # React components
│   ├── ui/               # Reusable UI components (buttons, inputs)
│   ├── library/          # Library-specific components (BookCard, TheLibrary)
│   └── ...
├── lib/                  # Utilities and hooks
└── public/               # Static assets
```

### Key Components

#### `TheLibrary`

The main container for the library view. Handles search state, filtering, and displaying the book grid.

```tsx
import { TheLibrary } from "@/components/library/TheLibrary";
import { initialBooks } from "@/components/library/sample-data";

export default function LibraryPage() {
  return (
    <TheLibrary
      books={initialBooks}
      onAddToCounter={(id) => console.log("Added to cart:", id)}
      onAddToWishlist={(id) => console.log("Added to wishlist:", id)}
    />
  );
}
```

#### `BookCard`

Displays individual book information with interactive actions.

| Prop              | Type                   | Description                                                 |
| :---------------- | :--------------------- | :---------------------------------------------------------- |
| `book`            | `Book`                 | Object containing book details (title, author, cover, etc.) |
| `onAddToCounter`  | `(id: string) => void` | Callback when "Add to Counter" is clicked                   |
| `onAddToWishlist` | `(id: string) => void` | Callback when heart icon is clicked                         |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
