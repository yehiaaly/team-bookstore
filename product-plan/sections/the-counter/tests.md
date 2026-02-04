# Test Instructions: The Counter

These test-writing instructions are **framework-agnostic**.

## Overview

Test the cart management and checkout form.

---

## User Flow Tests

### Flow 1: Remove Item

**Scenario:** User removes a book from the stack.

**Setup:** Render `TheCounter` with an order containing 2 items.

**Steps:**

1. Click "Remove" (or X) on the first item.

**Expected Results:**

- [ ] `onRemoveItem` fired with correct item ID.

### Flow 2: Complete Purchase

**Scenario:** User fills form and buys.

**Steps:**

1. Enter "John Doe" in Name field.
2. Enter "123 St" in Address field.
3. Click "Complete Purchase" (Stamp).

**Expected Results:**

- [ ] `onCompletePurchase` fired.
- [ ] Callback arguments contain the entered details ("John Doe", "123 St").

### Flow 3: Toggle Gift

**Scenario:** User adds gift wrap.

**Steps:**

1. Click "Wrap for a friend" checkbox/toggle.

**Expected Results:**

- [ ] `onToggleGift` fired with `true`.

---

## Empty State Tests

### Empty Cart

**Scenario:** Order items array is empty.

**Expected Results:**

- [ ] "No items in stack" message is visible.
- [ ] Form might be disabled or hidden.

---

## Component Interaction Tests

- [ ] **Totals:** Verify Subtotal + Tax = Total is displayed correctly (though calculation might be outside, the display must match props).
- [ ] **Validation:** (If implemented in UI) Try submitting empty form. Verify error states on ledger lines.
