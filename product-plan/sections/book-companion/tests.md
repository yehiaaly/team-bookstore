# Test Instructions: Book Companion

These test-writing instructions are **framework-agnostic**.

## Overview

Test the display of rich book details and the purchase flow.

---

## User Flow Tests

### Flow 1: Display Details

**Scenario:** User views book details.

#### Success Path

**Setup:** Render `BookCompanion` with a full `BookDetail` object.

**Expected Results:**

- [ ] Title, Subtitle, Price display correctly.
- [ ] Curator Letter content is visible.
- [ ] Personality scores render (checking for specific trait labels).
- [ ] Physical specs (Binding, Paper) display correctly.

### Flow 2: Purchase

**Scenario:** User adds book to counter.

**Steps:**

1. Scroll to sticky action bar or hero button.
2. Click "Add to Counter".

**Expected Results:**

- [ ] `onAddToCounter` fired with book ID.

### Flow 3: Navigation

**Scenario:** User goes back.

**Steps:**

1. Click "Back" button.

**Expected Results:**

- [ ] `onBack` fired.

---

## Edge Cases

- [ ] **Missing Data:** Test with optional fields (subtitle, curator code) undefined. Ensure UI degrades gracefully (doesn't crash).
- [ ] **Long Text:** Test description or letter with very long text to check wrapping.

---

## Accessibility Checks

- [ ] "Add to Counter" button is accessible via keyboard.
- [ ] Images have alt text (cover, texture).
