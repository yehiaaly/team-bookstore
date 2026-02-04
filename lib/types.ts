export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Publisher extends BaseEntity {
  name: string;
  description?: string;
  website?: string;
}

export interface Author extends BaseEntity {
  name: string;
  bio?: string;
  photoUrl?: string; // Optional URL for author image
}

export interface Category extends BaseEntity {
  name: string;
  slug: string;
  description?: string;
}

export interface Collection extends BaseEntity {
  name: string;
  slug: string;
  description: string;
  coverImageUrl?: string;
  bookIds: string[]; // References to Book IDs
}

export interface Book extends BaseEntity {
  title: string;
  subtitle?: string;
  description: string;
  isbn: string;
  price: number;
  discountPrice?: number; // For sales
  coverImageUrl: string;
  pageCount: number;
  publishedDate: string;
  publisherId: string;
  publisher?: Publisher;
  authorIds: string[];
  authors?: Author[];
  categoryIds: string[];
  categories?: Category[];
  stockQuantity: number;
  isFeatured?: boolean;
}

export interface Customer extends BaseEntity {
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
}

export interface Address extends BaseEntity {
  customerId: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface Wishlist extends BaseEntity {
  customerId: string;
  bookIds: string[];
}

export interface OrderItem extends BaseEntity {
  orderId: string;
  bookId: string;
  book: Book; // Snapshot of book data at time of purchase might be better, but linking for now
  quantity: number;
  priceAtPurchase: number;
}

export interface Order extends BaseEntity {
  customerId: string;
  customer?: Customer;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  totalAmount: number;
  items: OrderItem[];
  shippingAddress: Address;
  paymentMethod?: string;
}
