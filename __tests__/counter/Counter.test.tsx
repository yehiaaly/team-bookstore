import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TheCounter } from "@/components/counter/TheCounter";
import type { Order } from "@/types/counter";

// Sample data for testing
const mockOrder: Order = {
  id: "ord-test-1",
  subtotal: 100,
  tax: 10,
  total: 110,
  isGift: false,
  items: [
    {
      id: "item-1",
      book: {
        id: "bk-1",
        title: "Test Book 1",
        author: "Test Author 1",
        price: 50,
        coverUrl: "/test-cover.jpg",
      },
      quantity: 1,
    },
    {
      id: "item-2",
      book: {
        id: "bk-2",
        title: "Test Book 2",
        author: "Test Author 2",
        price: 50,
        coverUrl: "/test-cover.jpg",
      },
      quantity: 1,
    },
  ],
};

describe("The Counter", () => {
  it("Flow 1: Remove Item - fires onRemoveItem when X is clicked", () => {
    const handleRemove = vi.fn();
    render(<TheCounter order={mockOrder} onRemoveItem={handleRemove} />);

    // Find the remove buttons. Since there are 2 items, we expect 2 buttons.
    // The X icon is inside a button. We can look for the button role.
    const removeButtons = screen.getAllByRole("button").filter(
      (btn) =>
        btn.querySelector("svg") && // Assumes the X is an SVG
        !btn.textContent, // And it has no text (unlike Seal & Pay)
    );

    // We can also find by looking for the X icon specifically if we knew the accessible name,
    // but the component doesn't seem to have aria-label on the button.
    // Let's rely on the fact that we have items.

    // Actually, looking at the code: <button onClick...><X .../></button>
    // Let's assume the first remove button corresponds to the first item (item-1).
    fireEvent.click(removeButtons[0]);

    expect(handleRemove).toHaveBeenCalledWith("item-1");
  });

  it("Flow 2: Complete Purchase - fires onCompletePurchase with form data", () => {
    const handleComplete = vi.fn();
    render(
      <TheCounter order={mockOrder} onCompletePurchase={handleComplete} />,
    );

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/address/i), {
      target: { value: "123 St" },
    });
    fireEvent.change(screen.getByLabelText(/city/i), {
      target: { value: "Booktown" },
    });
    fireEvent.change(screen.getByLabelText(/zip/i), {
      target: { value: "12345" },
    });

    const submitBtn = screen.getByRole("button", { name: /seal & pay/i });
    fireEvent.click(submitBtn);

    expect(handleComplete).toHaveBeenCalledWith({
      fullName: "John Doe",
      email: "john@example.com",
      address: "123 St",
      city: "Booktown",
      zip: "12345",
    });
  });

  it("Flow 3: Toggle Gift - fires onToggleGift", () => {
    const handleToggle = vi.fn();
    render(<TheCounter order={mockOrder} onToggleGift={handleToggle} />);

    const giftText = screen.getByText(/wrap as a gift/i);
    fireEvent.click(giftText); // The parent div has the onClick

    expect(handleToggle).toHaveBeenCalledWith(true);
  });

  it("Empty State - shows message and disables button", () => {
    const emptyOrder = {
      ...mockOrder,
      items: [],
      total: 0,
      subtotal: 0,
      tax: 0,
    };
    render(<TheCounter order={emptyOrder} />);

    expect(screen.getByText(/stack is empty/i)).toBeDefined();

    const submitBtn = screen.getByRole("button", { name: /seal & pay/i });
    expect(submitBtn).toHaveProperty("disabled", true);
  });
});
