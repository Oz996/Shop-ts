export type Category = "mens" | "womens" | "jewelery" | "electronics";

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
}

export interface ProductProps {
  product: Product;
}

export interface DataProps {
  data: Product[];
}

export interface Categories {
  value: string;
  label: string;
}
