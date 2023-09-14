import { Product } from "./product";

export interface Cart {
  cart: CartItem[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartItemProps {
  product: CartItem;
}

type CartAction =
  | { type: "add_product"; payload: Product }
  | { type: "increment"; payload: Product }
  | { type: "decrement"; payload: Product }
  | { type: "remove_product"; payload: Product }
  | { type: "empty_cart" }
  | { type: "set_cart"; payload: CartItem[] };
