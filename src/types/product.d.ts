export type Category = "men's clothing" | "womens" | "jewelry" | "electronics";

export interface Product {
  id: number | string;
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
  product?: Product;
  data?: Product[];
}

export interface Categories {
  value: string;
  label: string;
}
