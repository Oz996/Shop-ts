import { Product } from "./product";

export interface Cart {
  cart: CartItem[];
}

export interface CartItem extends Product {
  quantity: number;
}

type CartAction =
  | { type: "add_product"; payload: Product }
  | { type: "increment"; payload: Product }
  | { type: "decrement"; payload: Product }
  | { type: "remove_product"; payload: Product }
  | { type: "empty_cart" }
  | { type: "set_cart"; payload: Product[] };
