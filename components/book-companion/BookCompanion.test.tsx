import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BookCompanion } from "./BookCompanion";
import { BookDetail } from "@/types/book";

// Mock data
const mockBook: BookDetail = {
  id: "test-1",
  title: "Test Book",
  subtitle: "A Subtitle",
  price: 50.0,
  rating: 4.5,
  coverUrl: "http://example.com/cover.jpg",
  textureUrl: "http://example.com/texture.jpg",
  authors: [{ name: "Test Author" }],
  publisher: "Test Publisher",
  year: 2024,
  description: "Test Description",
  curatorLetter: {
    heading: "Hello",
    body: "This is a test letter body.",
    signature: "Curator",
    date: "2024",
  },
  personality: {
    duration: 50,
    focus: 50,
    environment: 50,
    density: 50,
  },
  physicalSpecs: {
    binding: "Paperback",
    paper: "Standard",
    dimensions: "5x8",
    weight: "1lb",
    pages: 200,
  },
  isRare: false,
};

describe("BookCompanion", () => {
  it("renders book details correctly", () => {
    render(<BookCompanion book={mockBook} />);

    // Multiple elements for responsive layout
    expect(screen.getAllByText("Test Book").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Test Author").length).toBeGreaterThan(0);

    expect(screen.getByText(/Test Publisher/)).toBeDefined();
    expect(screen.getByText(/"This is a test letter body."/)).toBeDefined();
    expect(screen.getByText("Paperback")).toBeDefined();
  });

  it("calls onAddToCounter when clicked", () => {
    const handleAdd = vi.fn();
    render(<BookCompanion book={mockBook} onAddToCounter={handleAdd} />);

    // Use accessible name or role
    const button = screen.getByRole("button", { name: /invite home/i });
    fireEvent.click(button);

    expect(handleAdd).toHaveBeenCalledWith("test-1");
  });

  it("calls onBack when clicked", () => {
    const handleBack = vi.fn();
    render(<BookCompanion book={mockBook} onBack={handleBack} />);

    const button = screen.getByRole("button", { name: /back to library/i });
    fireEvent.click(button);

    expect(handleBack).toHaveBeenCalled();
  });
});
