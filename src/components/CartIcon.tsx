'use client'

import { useCart } from "@/hooks/useCart"
import { RiShoppingBasket2Fill } from "react-icons/ri"

const CartIcon = () => {
    const {cart} = useCart()

  return (
    <>
    <RiShoppingBasket2Fill className="cursor-pointer" size={22} />
    <div className="absolute right-[17.5rem] top-3 text-sm bg-black h-5 w-5 rounded-full flex justify-center items-center">
        <p>{cart.cart.length}</p>
        </div>
    </>
  )
}

export default CartIcon