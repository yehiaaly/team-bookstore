# Milestone 4: The Counter

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

Implement **The Counter** — The checkout experience, designed to be calm, honest, and service-oriented.

## Overview

A calm, single-page checkout experience styled like a traditional bookstore ledger. It replaces standard forms with a "Guestbook" aesthetic.

**Key Functionality:**

- **The Stack:** Visual representation of cart items.
- **The Ledger:** Form for shipping/billing details.
- **Gift Option:** Toggle to wrap/add note.
- **Stamp:** "Complete Purchase" action.

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/the-counter/tests.md` for detailed test-writing instructions.

## What to Implement

### Components

Copy the section components from `product-plan/sections/the-counter/components/`:

- `TheCounter` (Main container)
- Subcomponents for Stack, Ledger, Stamp

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

### Empty States

- **Empty Cart:** Show message if user visits Counter with no items (e.g., "The counter is empty, explore the library").

## Files to Reference

- `product-plan/sections/the-counter/README.md` — Feature overview and design intent
- `product-plan/sections/the-counter/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/the-counter/components/` — React components
- `product-plan/sections/the-counter/types.ts` — TypeScript interfaces
- `product-plan/sections/the-counter/sample-data.json` — Test data

## Expected User Flows

### Flow 1: Review & Modify

1. User sees "The Stack"
2. User clicks remove on an item
3. **Outcome:** Order total updates, item disappears.

### Flow 2: Checkout

1. User fills "The Ledger"
2. User clicks "Stamp" (Complete Purchase)
3. **Outcome:** Order is processed, success message shown.

## Done When

- [ ] Tests written for key user flows
- [ ] All tests pass
- [ ] Cart items display correctly
- [ ] Totals calculate correctly
- [ ] Form captures input
- [ ] Purchase action triggers backend process
- [ ] Responsive on mobile
