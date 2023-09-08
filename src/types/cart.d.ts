import { Product } from "./product";

export interface Cart {
  cart: Product[];
}

type CartAction =
  | { type: "add_product"; payload: Product }
  | { type: "increment"; payload: Product }
  | { type: "decrement"; payload: Product }
  | { type: "remove_product"; payload: Product }
  | { type: "empty_cart"; payload?: null }
  | { type: "set_cart"; payload: Product[] };
