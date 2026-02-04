# The Counter

## Overview

A calm, single-page checkout experience styled like a traditional bookstore ledger. It replaces standard forms with a "Guestbook" aesthetic.

## User Flows

- **Review the Stack:** User sees their selected books visually stacked on the left.
- **Sign the Guestbook:** User enters shipping/contact details.
- **Gift Options:** User toggles "Wrap for a friend".
- **Seal the Deal:** User clicks a "Stamp" style button to complete the purchase.

## Design Decisions

- **Ledger Aesthetic:** Lines instead of boxes for inputs.
- **Visual Stack:** Tangible representation of items.
- **Stamp Button:** Skeuomorphic action for commitment.

## Data Used

**Entities:** `Order`, `OrderItem`, `CustomerDetails`

## Components Provided

- `TheCounter` — Main container
- `TheStack` — List of items
- `TheLedger` — Form
- `StampButton` — Submit action

## Callback Props

| Callback             | Description           |
| -------------------- | --------------------- |
| `onRemoveItem`       | Remove item from cart |
| `onToggleGift`       | Toggle gift wrap      |
| `onCompletePurchase` | Submit order          |
