import { CartContext } from "@/context/CartContext";
import { Cart } from "@/types/cart";
import { useContext } from "react";

export function useCart() {
  const cartContext = useContext(CartContext);

  if (cartContext === undefined) {
    throw new Error("Failed to retrieve cart");
  }
  return cartContext;
}
