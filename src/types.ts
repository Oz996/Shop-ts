export type Category = "men's clothing" | "womens" | "jewelry" | "electronics";

export interface Product {
  id: number;
  title: string;
  price: string;
  category: Category;
  description: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
  quantity: number;
}

export interface ProductProps {
  product: Product;
}

export interface Cart {
  cart: Product[];
  quantity: number;
  total: number;
}

export interface CartAction {
  type: string;
  payload?: any;
}
