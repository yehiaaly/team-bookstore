# Test Instructions: The Library

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, etc.).

## Overview

Test the browsing, searching, and filtering of the book collection.

---

## User Flow Tests

### Flow 1: Browsing Collections

**Scenario:** User switches between collection tabs.

#### Success Path

**Setup:**

- Render `TheLibrary` with 3 collections and a list of books.
- Ensure books belong to different collections.

**Steps:**

1. User clicks "The Vault" tab.
2. `onSelectCollection` is called with "the-vault" ID (or equivalent).
3. The UI updates (if managed internally) or expect callback.

**Expected Results:**

- [ ] `onSelectCollection` callback fired with correct ID.
- [ ] Active tab visual state changes.

### Flow 2: Search

**Scenario:** User searches for a book.

#### Success Path

**Steps:**

1. User types "Moby Dick" in the search bar.
2. `onSearch` is called with "Moby Dick".

**Expected Results:**

- [ ] `onSearch` callback fired.

### Flow 3: Card Actions

**Scenario:** User interacts with a book card.

#### Success Path

**Steps:**

1. User hovers/views a book card.
2. User clicks "Explore Companion".
3. `onExploreCompanion` is called with book ID.

**Expected Results:**

- [ ] `onExploreCompanion` fired with correct ID.

**Steps:**

1. User clicks "Add to Counter".
2. `onAddToCounter` is called with book ID.

**Expected Results:**

- [ ] `onAddToCounter` fired with correct ID.

---

## Empty State Tests

### No Search Results

**Scenario:** Search returns no matches.
**Setup:** Pass empty `books` array (assuming filtered list is passed).

**Expected Results:**

- [ ] "No books found" (or similar) message displayed.
- [ ] Grid is empty but not broken.

---

## Component Interaction Tests

### Book Card

- [ ] Displays Title, Author, Price correctly.
- [ ] "Why we picked it" displays if `curatorNote` is present.
- [ ] Renders correctly with `isRare` badge if true.
