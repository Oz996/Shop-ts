"use client";

import { Cart, CartAction } from "@/types/cart";
import { Product } from "@/types/product";
import { createContext, useEffect, useReducer } from "react";

const initialState: Cart = {
  cart: [],
};

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case "add_product":
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
        const updatedState = { ...state };
        return updatedState;
      } else {
        const newProduct = {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };

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
        return updatedCart;
      }
      return state;
    case "empty_cart":
      return { ...state, cart: [] };
    case "set_cart":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export const CartContext = createContext<{
  state: Cart;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      dispatch({ type: "set_cart", payload: parsedCart });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart.cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
