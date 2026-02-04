# Book Companion

## Overview

A standalone, immersive product detail view that treats the book as a "companion" and "artifact." It emphasizes physical quality, editorial curation, and the book's unique personality.

## User Flows

- **Arrival:** User arrives from The Library, entering a focused "private view".
- **Visual & Emotional Connection:** User sees the "Tangible Hero" — a split view with a tactile image and a personal **Curator's Letter**.
- **Personality Assessment:** User reviews the "Friendship Score" traits.
- **Physical Inspection:** User scrolls to "The Artifact" section to see museum-style details.
- **Adoption:** User clicks "Add to Counter" to purchase.

## Design Decisions

- **Standalone Layout:** Removing the persistent shell for immersion.
- **Curator Letter:** Adding a personal touch.
- **Radar/personality chart:** Quantifying abstract qualities.

## Data Used

**Entities:** `BookDetail`, `CuratorLetter`, `Personality`, `PhysicalSpecs`

## Components Provided

- `BookCompanion` — Main container
- `TangibleHero` — Split hero section
- `CuratorLetter` — Letter component
- `FriendshipScore` — Personality chart
- `TheArtifact` — Physical specs grid

## Callback Props

| Callback          | Description                      |
| ----------------- | -------------------------------- |
| `onAddToCounter`  | Called when purchasing           |
| `onAddToWishlist` | Called when saving               |
| `onBack`          | Called when returning to library |
