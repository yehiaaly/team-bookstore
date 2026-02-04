# Team Books — Complete Implementation Instructions

---

## About These Instructions

**What you're receiving:**

- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)
- UI/UX specifications (user flows, requirements, screenshots)
- Design system tokens (colors, typography, spacing)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**

- Backend API endpoints and database schema
- Authentication and authorization
- Data fetching and state management
- Business logic and validation
- Integration of the provided UI components with real data

**Important guidelines:**

- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your routing and API calls
- **DO** replace sample data with real data from your backend
- **DO** implement proper error handling and loading states
- **DO** implement empty states when no records exist (first-time users, after deletions)
- **DO** use test-driven development — write tests first using `tests.md` instructions
- The components are props-based and ready to integrate — focus on the backend and data layer

---

## Test-Driven Development

Each section includes a `tests.md` file with detailed test-writing instructions. These are **framework-agnostic** — adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, RSpec, Minitest, PHPUnit, etc.).

**For each section:**

1. Read `product-plan/sections/[section-id]/tests.md`
2. Write failing tests for key user flows (success and failure paths)
3. Implement the feature to make tests pass
4. Refactor while keeping tests green

The test instructions include:

- Specific UI elements, button labels, and interactions to verify
- Expected success and failure behaviors
- Empty state handling (when no records exist yet)
- Data assertions and state validations

---

# Product Overview

## Summary

A luxurious, curated online bookstore that connects readers with their next literary "friend." We prioritize human connection, physical quality, and honest service over trends and algorithms, offering a warm, respectful digital environment for true book lovers.

## Planned Sections

1. **The Library** — The main browsing experience where users explore the curated "True Voices" and collections.
2. **Book Companion** — The product detail view focusing on the physical connection, binding quality, and the "friendship" the book offers.
3. **The Counter** — The checkout experience, designed to be calm, honest, and service-oriented.

## Data Model

Entities: Book, Author, Publisher, Category, Collection, Customer, Address, Wishlist, Order, OrderItem

---

# Milestone 1: Foundation

## Goal

Set up the foundational elements: design tokens, data model types, routing structure, and application shell.

## What to Implement

### 1. Design Tokens

Configure your styling system with these tokens:

- See `product-plan/design-system/tokens.css` for CSS custom properties
- See `product-plan/design-system/tailwind-colors.md` for Tailwind configuration
- See `product-plan/design-system/fonts.md` for Google Fonts setup

### 2. Data Model Types

Create TypeScript interfaces for your core entities:

- See `product-plan/data-model/types.ts` for interface definitions
- See `product-plan/data-model/README.md` for entity relationships

### 3. Routing Structure

Create placeholder routes for each section:

1. **/library** (or /) — The Library (Browsing)
2. **/book/:id** — Book Companion (Product Detail)
3. **/counter** — The Counter (Checkout)

### 4. Application Shell

Copy the shell components from `product-plan/shell/components/` to your project:

- `AppShell.tsx` — Main layout wrapper
- `MainNav.tsx` — Navigation component
- `UserMenu.tsx` — User menu with avatar

**Wire Up Navigation:**

Connect navigation to your routing:

- **The Library** -> Link to `/library`
- **Book Companion** -> Link to Featured Book or `/book/:id`
- **About Us** -> Link to `/about` (or placeholder)

**User Menu:**

The user menu expects:

- Wishlist action
- Cart (Counter) action
- User Avatar/Profile options

---

# Milestone 2: The Library

## Goal

Implement **The Library** — The main browsing experience where users explore the curated "True Voices" and collections.

## Overview

The primary browsing experience for Team Books, featuring an immersive hero section and a curated, tabbed interface for exploring the collection. It emphasizes discovery through "True Voices" and human curation rather than algorithms.

## What to Implement

### Components

Copy the section components from `product-plan/sections/the-library/components/`.

### Data Layer

The components expect these data shapes (see `types.ts`):

- `Book`
- `Collection`

You'll need to:

- Create API endpoints to fetch books and collections
- Connect real data to the `books` and `collections` props

### Callbacks

Wire up these user actions:

- `onAddToCounter(bookId)`: Add item to cart/order
- `onExploreCompanion(bookId)`: Navigate to Book Companion page (`/book/:id`)
- `onSelectCollection(collectionId)`: Filter books by collection
- `onSearch(query)`: Filter books by search query

---

# Milestone 3: Book Companion

## Goal

Implement **Book Companion** — The product detail view focusing on the physical connection, binding quality, and the "friendship" the book offers.

## Overview

A standalone, immersive product detail view that treats the book as a "companion" and "artifact." It emphasizes physical quality, editorial curation, and the book's unique personality traits over standard e-commerce specs.

## What to Implement

### Components

Copy the section components from `product-plan/sections/book-companion/components/`.

### Data Layer

The components expect these data shapes (see `types.ts`):

- `BookDetail` (includes `CuratorLetter`, `Personality`, `PhysicalSpecs`)

You'll need to:

- Create API endpoints to fetch a single book by ID
- Connect real data to the `book` prop

### Callbacks

Wire up these user actions:

- `onAddToCounter(id)`: Add item to cart/order
- `onAddToWishlist(id)`: Add item to wishlist
- `onBack()`: Navigate back to the library

---

# Milestone 4: The Counter

## Goal

Implement **The Counter** — The checkout experience, designed to be calm, honest, and service-oriented.

## Overview

A calm, single-page checkout experience styled like a traditional bookstore ledger. It replaces standard forms with a "Guestbook" aesthetic.

## What to Implement

### Components

Copy the section components from `product-plan/sections/the-counter/components/`.

### Data Layer

The components expect these data shapes (see `types.ts`):

- `Order`
- `OrderItem`
- `CustomerDetails`

You'll need to:

- Create API endpoints to manage the active order (cart)
- Implement checkout logic (payment processing placeholder)

### Callbacks

Wire up these user actions:

- `onRemoveItem(itemId)`: Remove book from order
- `onToggleGift(isGift)`: Update gift status
- `onCompletePurchase(details)`: Process the order with provided customer details
