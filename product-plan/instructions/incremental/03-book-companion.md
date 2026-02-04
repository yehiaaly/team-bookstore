# Milestone 3: Book Companion

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

Implement **Book Companion** — The product detail view focusing on the physical connection, binding quality, and the "friendship" the book offers.

## Overview

A standalone, immersive product detail view that treats the book as a "companion" and "artifact." It emphasizes physical quality, editorial curation, and the book's unique personality traits over standard e-commerce specs.

**Key Functionality:**

- **Standalone Layout:** Full screen, focused view.
- **Tangible Hero:** Split view with tactile image and context.
- **Curator Letter:** Personal note explaining the selection.
- **Personality Scores:** Visual traits (Warmth, Wisdom, etc.).
- **Artifact Specs:** Physical details (Binding, Paper, Weight).

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/book-companion/tests.md` for detailed test-writing instructions.

## What to Implement

### Components

Copy the section components from `product-plan/sections/book-companion/components/`:

- `BookCompanion` (Main container)
- Subcomponents for CuratorLetter, Personality, Specs

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

### Empty States

- **Book Not Found:** Handle 404s gracefully (e.g., redirect or show specific error).

## Files to Reference

- `product-plan/sections/book-companion/README.md` — Feature overview and design intent
- `product-plan/sections/book-companion/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/book-companion/components/` — React components
- `product-plan/sections/book-companion/types.ts` — TypeScript interfaces
- `product-plan/sections/book-companion/sample-data.json` — Test data

## Expected User Flows

### Flow 1: Arrival & Inspection

1. User arrives from Library (or direct link)
2. User sees Curator Letter and "Tangible Hero"
3. User scrolls to see Personality characteristics and Artifact Specs
4. **Outcome:** User fully understands the book's "vibe" and physical quality.

### Flow 2: Purchase

1. User clicks "Add to Counter"
2. **Outcome:** Item added to order, maybe redirect to Counter or show toast.

### Flow 3: Return

1. User clicks Back button
2. **Outcome:** Returns to Library.

## Done When

- [ ] Tests written for key user flows
- [ ] All tests pass
- [ ] Component renders with real book data
- [ ] "Add to Counter" works
- [ ] "Back" navigation works
- [ ] Responsive on mobile
