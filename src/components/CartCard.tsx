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

const CartCard = ({ item }) => {
  const { dispatch } = useCart();
  return (
    <Card className="border-t-0 border-x-0">
      <div className="flex items-center">
        <CardHeader>
          <Image
            src={item.image}
            height={70}
            width={70}
            alt="Image of product in cart"
          ></Image>
          <p className="text-sm">{item.title}</p>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <Button
              variant="ghost"
              onClick={() => dispatch({ type: "decrement", payload: item })}
            >
              -
            </Button>
            <p className="mx-2 self-center">{item.quantity}</p>
            <Button
              variant="ghost"
              onClick={() => dispatch({ type: "increment", payload: item })}
            >
              +
            </Button>
            <Button variant="ghost" className="p-0">
              <BiSolidTrashAlt
                size={20}
                className="hover:text-red-600 duration-200"
                onClick={() =>
                  dispatch({ type: "remove_product", payload: item })
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
