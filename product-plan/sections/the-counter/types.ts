// =============================================================================
// Data Types
// =============================================================================

export interface BookSummary {
  id: string;
  title: string;
  author: string;
  price: number;
  coverUrl: string;
}

export interface OrderItem {
  id: string;
  book: BookSummary;
  quantity: number;
}

export interface Order {
  id: string;
  subtotal: number;
  tax: number;
  total: number;
  isGift: boolean;
  giftNote?: string;
  items: OrderItem[];
}

export interface CustomerDetails {
  fullName: string;
  email: string;
  address: string;
  city: string;
  zip: string;
}

// =============================================================================
// Component Props
// =============================================================================

export interface TheCounterProps {
  /** The current active order (cart) */
  order: Order;

  /** Called when user removes an item from the stack */
  onRemoveItem?: (itemId: string) => void;

  /** Called when user toggles the gift wrap option */
  onToggleGift?: (isGift: boolean) => void;

  /** Called when user completes the purchase (stamps the ledger) */
  onCompletePurchase?: (details: CustomerDetails) => void;
}
