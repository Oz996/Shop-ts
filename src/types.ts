export type Category = "men's clothing" | "womens" | "jewelry" | "electronics";

export interface Product {
  id: number;
  title: string;
  price: string;
  category: Category;
  description: string;
  image: string;
}
