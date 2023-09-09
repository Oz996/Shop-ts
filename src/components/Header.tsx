import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";
import { FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[3.5rem] bg-slate-600 text-white">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link href="/" className=" uppercase font-semibold text-2xl">
          shop
        </Link>
        <nav>
          <ul className="flex gap-8 items-center">
            <li>
              <Link href="/add">
                <FaPlus size={15} />
              </Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <CartIcon />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
