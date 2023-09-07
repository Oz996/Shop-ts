"use client";
import { Cart, CartAction } from "@/types";
import { createContext, useReducer } from "react";

const initialState: Cart = {
  cart: [],
  quantity: 0,
  total: 0,
};

export const CartContext = createContext(initialState);

const saveCartToLocalStorage = (cart: Cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case "add_item":
      const existingProduct = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProduct !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProduct].quantity++;
        const updatedState = { ...state, cart: updatedCart };
        saveCartToLocalStorage(updatedState);
        return { ...state, cart: updatedCart };
      } else {
        const updatedState = {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
        saveCartToLocalStorage(updatedState);
        return updatedState;
      }
    case "increment_item":
      const incrementIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (incrementIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[incrementIndex].quantity++;
        const updatedState = { ...state, cart: updatedCart };
        saveCartToLocalStorage(updatedState);
        return updatedState;
      } else {
        return state;
      }

    case "decrement_item":
      const decrementIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (decrementIndex !== -1 && state.cart[decrementIndex].quantity > 1) {
        const updatedCart = [...state.cart];
        updatedCart[decrementIndex].quantity--;
        const updatedState = { ...state, cart: updatedCart };
        saveCartToLocalStorage(updatedState);
        return updatedState;
      } else {
        return state;
      }

    case "empty_cart":
      state.cart = [];
      localStorage.removeItem("cart");
      return { ...state, cart: [] };

    default:
      return state;
  }
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  
  const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
  initialState.cart = savedCart;

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
