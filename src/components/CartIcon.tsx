"use client";

import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import CartCard from "./CartCard";
import { Button } from "./ui/button";

const CartIcon = () => {
  const [setshowSheet, setSetshowSheet] = useState(false);
  const { cart } = useCart();
  console.log(cart);

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <RiShoppingBasket2Fill
            className="cursor-pointer"
            size={22}
            onClick={() => setSetshowSheet((prev) => !prev)}
          />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cart({cart.cart.length})</SheetTitle>
          </SheetHeader>
          <div>
            {cart.cart.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>
          <div className="absolute bottom-10">
            <Button>Proceed to Checkout</Button>
            <Button variant="destructive">Clear Cart</Button>
          </div>
        </SheetContent>
      </Sheet>
      <div className="absolute right-[17.5rem] top-3 text-sm bg-black h-5 w-5 rounded-full flex justify-center items-center">
        <p>{cart.cart.length}</p>
      </div>
    </>
  );
};

export default CartIcon;
