"use client";

import { Cart, CartAction } from "@/types";
import { createContext, useEffect, useReducer } from "react";

const initialState: Cart = {
  cart: [],
};

const cartReducer = (state: Cart, action: CartAction) => {
  switch (action.type) {
    case "add_product":
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
        const updatedState = { ...state };
        localStorage.setItem("cart", JSON.stringify(updatedState));
        return updatedState;
      } else {
        const newProduct = {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
        localStorage.setItem("cart", JSON.stringify(newProduct));
        return newProduct;
      }
    case "increment":
      const increment = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (increment) {
        increment.quantity++;
        return { ...state };
      }
      return state;
    case "decrement":
      const decrement = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (decrement?.quantity === 1) {
        const removeProduct = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
        return { ...state, cart: removeProduct };
      } else if (decrement) {
        decrement.quantity--;
        return { ...state };
      }
      return state;
    case "remove_product":
      const product = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        const cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
        const updatedCart = { ...state, cart: cart };
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
      return state;
    case "empty_cart":
      localStorage.removeItem("cart");
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export const CartContext = createContext(initialState);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
