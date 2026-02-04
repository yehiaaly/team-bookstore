# Data Model

## Entities

### Book

The core physical product. Represents a distinct literary work with specific binding quality, price, and inventory status. It is treated as a "companion" rather than just a commodity.

### Author

The creator of the work. Represents the "True Voice" behind the book.

### Publisher

The entity responsible for the physical production of the book. Critical for identifying specific editions and quality bindings.

### Category

Broad genres or interest groups (e.g., "Philosophy", "Modern Classics") that allow users to browse based on their preferences.

### Collection

Curated groupings of books (e.g., "Rare Editions", "Staff Picks") used for editorial merchandising instead of algorithmic feeds.

### Customer

The user or reader who builds a relationship with the bookstore.

### Address

Shipping or billing location associated with a customer.

### Wishlist

A saved list of books a customer is interested in, supporting the "no hard sell" philosophy by allowing users to save for later.

### Order

A completed transaction at "The Counter," representing a purchase made by a customer.

### OrderItem

A specific line item within an order, linking a book to the transaction and capturing the price and quantity at the time of purchase.

## Relationships

- **Book** has one **Publisher**
- **Book** has many **Authors**
- **Book** belongs to many **Categories**
- **Collection** contains many **Books**
- **Customer** has many **Addresses**
- **Customer** has one **Wishlist**
- **Wishlist** contains many **Books**
- **Order** belongs to **Customer**
- **Order** has many **OrderItems**
- **OrderItem** links **Order** and **Book**
