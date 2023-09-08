"use client";

import { useCart } from "@/hooks/useCart";
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
import { Product } from "@/types/product";

const CartIcon = () => {
  const { cart, dispatch } = useCart();
  console.log(cart);

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <RiShoppingBasket2Fill className="cursor-pointer" size={22} />
        </SheetTrigger>
        <SheetContent className="overflow-y-scroll">
          <SheetHeader>
            <SheetTitle>
              {cart.cart.length > 0 && <p>Cart({cart.cart.length})</p>}
            </SheetTitle>
          </SheetHeader>
          <div>
            {cart.cart.length == 0 ? (
              <div className="flex flex-col justify-center items-center gap-3 pt-20">
                <RiShoppingBasket2Fill size={35} />
                <p className="text-xl font-semibold">Cart is empty</p>
              </div>
            ) : (
              cart.cart.map((product: Product) => (
                <CartCard key={product.id} product={product} />
              ))
            )}
          </div>
          <div className="fixed bottom-10">
            <Button>Proceed to Checkout</Button>
            <Button
              onClick={() => dispatch({ type: "empty_cart" })}
              variant="destructive"
            >
              Clear Cart
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      {cart.cart.length > 0 && (
        <div className="absolute right-[17.5rem] top-3 text-sm bg-black h-5 w-5 rounded-full flex justify-center items-center">
          <p>{cart.cart.length}</p>
        </div>
      )}
    </>
  );
};

export default CartIcon;
