# Milestone 2: The Library

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

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

## Goal

Implement **The Library** — The main browsing experience where users explore the curated "True Voices" and collections.

## Overview

The primary browsing experience for Team Books, featuring an immersive hero section and a curated, tabbed interface for exploring the collection. It emphasizes discovery through "True Voices" and human curation rather than algorithms.

**Key Functionality:**

- **Hero Section:** Full-screen background (video/image) with "Explore" CTA.
- **Search Bar:** Prominent search to find titles or authors.
- **Tabbed Collections:** Switch between "Curator's Choice," "The Vault," etc.
- **Book Cards:** Display cover, title, author, price, rating.
- **Actions:** View details ("Explore Companion") or Add to Cart ("Add to Counter").

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/the-library/tests.md` for detailed test-writing instructions.

## What to Implement

### Components

Copy the section components from `product-plan/sections/the-library/components/`:

- `TheLibrary` (Main container)
- Subcomponents for Hero, Grid, Cards, Search

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

### Empty States

Implement empty state UI:

- **No Search Results:** Message when search yields no matches.
- **Empty Collection:** Message if a selected collection has no books.

## Files to Reference

- `product-plan/sections/the-library/README.md` — Feature overview and design intent
- `product-plan/sections/the-library/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/the-library/components/` — React components
- `product-plan/sections/the-library/types.ts` — TypeScript interfaces
- `product-plan/sections/the-library/sample-data.json` — Test data

## Expected User Flows

### Flow 1: Browsing Collections

1. User lands on page
2. User clicks "Explore" to scroll to grid
3. User clicks different tabs ("The Vault")
4. **Outcome:** Book list updates to show only books in that collection.

### Flow 2: Searching

1. User types in search bar
2. **Outcome:** List filters in real-time or on submit to match query.

### Flow 3: Viewing Details

1. User clicks "Explore Companion" on a book card
2. **Outcome:** Navigates to `/book/:id`.

## Done When

- [ ] Tests written for key user flows
- [ ] All tests pass
- [ ] Components render with real data from backend
- [ ] Tabs switch collections correctly
- [ ] Search functions correctly
- [ ] "Explore Companion" navigates to detail page
- [ ] "Add to Counter" adds item to cart
- [ ] Responsive on mobile
