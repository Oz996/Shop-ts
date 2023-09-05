"use client";
import React from "react";
import { Button } from "./ui/button";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { useCart } from "@/hooks/useCart";

const AddButton = ({ product }) => {
  const { cart, dispatch } = useCart();
  console.log(cart.cart)
  return (
    <Button
      className="flex gap-1 bg-slate-600 w-full"
      onClick={() => dispatch({ type: "add_item", payload: product})}
    >
      <RiShoppingBasket2Fill size={17} /> Add to Cart
    </Button>
  );
};

export default AddButton;
