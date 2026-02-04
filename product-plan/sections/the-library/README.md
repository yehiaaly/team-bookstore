# The Library

## Overview

The primary browsing experience for Team Books, featuring an immersive hero section and a curated, tabbed interface for exploring the collection. It emphasizes discovery through "True Voices" and human curation.

## User Flows

- **Landing & Discovery:** User lands on a full-screen Hero, clicks "Explore," and smooth-scrolls to the main collection.
- **Browsing Collections:** User switches between tabs (Curator's Choice, The Vault, The Collection) to see different curated sets.
- **Search & Find:** User types in the prominent search bar to find specific titles or authors.
- **Card Interaction:** User views book details and clicks "Explore Companion" or "Add to Counter".

## Design Decisions

- **Hero Section:** Full-screen background for immersion.
- **Tabbed Navigation:** Categorizes books into distinct browsing experiences.
- **Book Cards:** Rich display with diverse metadata (rating, price, category).

## Data Used

**Entities:** `Book`, `Collection`
**From global model:** Book, Author, Publisher, Collection.

## Components Provided

- `TheLibrary` — Main container
- `TheLibraryHero` — Hero section
- `TheLibraryGrid` — Grid of books
- `BookCard` — Individual book display
- `CollectionTabs` — Tab navigation
- `SearchBar` — Search input

## Callback Props

| Callback             | Description                                |
| -------------------- | ------------------------------------------ |
| `onAddToCounter`     | Called when "Add to Counter" is clicked    |
| `onExploreCompanion` | Called when "Explore Companion" is clicked |
| `onSelectCollection` | Called when a collection tab is clicked    |
| `onSearch`           | Called when search input changes           |
