import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { FaStar } from "react-icons/fa";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { Button } from "./ui/button";
import Link from "next/link";
import { Product } from "@/types";
import AddButton from "./AddButton";
import { useCart } from "@/hooks/useCart";

const ProductCard = ({ product }: Product) => {
  const substring = () => {
    const title = product?.title;
    const longText = product?.title.length > 60;
    if (longText) {
      return title.substring(0, 60) + "...";
    }
    return title;
  };
  
  const productTitle = substring();
  return (
    <Card className="grid grid-rows-1 p-10  hover:scale-[101%] duration-200">
      <div className="flex justify-center items-center">
        <Link href={`/products/${product?.id}`}>
          <CardContent className="flex justify-center">
            <Image
              className="self-center"
              src={product?.image}
              width={120}
              height={120}
              alt="Picture of product"
            ></Image>
          </CardContent>
        </Link>
      </div>
      <Link href={`/products/${product?.id}`}>
        <CardTitle>{productTitle}</CardTitle>
      </Link>
      <CardContent className="flex flex-col justify-center gap-2 items-center p-0 my-8">
        <p className="flex items-center text-sm gap-1">
          <FaStar className="text-orange-300" size={14} />
          <FaStar className="text-orange-300" size={14} />
          <FaStar className="text-orange-300" size={14} />
          <FaStar className="text-orange-300" size={14} />
          <FaStar className="text-orange-300" size={14} />
          {product?.rating?.rate} ({product?.rating?.count})
        </p>
        <p className="text-lg font-semibold">€{product?.price}</p>
      </CardContent>
      <CardFooter className="justify-between p-0 border-t-2">
        <AddButton product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
