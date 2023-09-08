"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { BiSolidTrashAlt } from "react-icons/bi";
import { useCart } from "@/hooks/useCart";
import { ProductProps } from "@/types/product";

const CartCard: React.FC<ProductProps> = ({ product }) => {
  const { dispatch } = useCart();
  return (
    <Card className="border-t-0 border-x-0">
      <div className="flex items-center">
        <CardHeader>
          <Image
            src={product.image}
            height={70}
            width={70}
            alt="Image of product in cart"
          ></Image>
          <p className="text-sm">{product.title}</p>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <Button
              variant="ghost"
              onClick={() => dispatch({ type: "decrement", payload: product })}
            >
              -
            </Button>
            <p className="mx-2 self-center">{product.quantity}</p>
            <Button
              variant="ghost"
              onClick={() => dispatch({ type: "increment", payload: product })}
            >
              +
            </Button>
            <Button variant="ghost" className="p-0">
              <BiSolidTrashAlt
                size={20}
                className="hover:text-red-600 duration-200"
                onClick={() =>
                  dispatch({ type: "remove_product", payload: product })
                }
              />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default CartCard;
