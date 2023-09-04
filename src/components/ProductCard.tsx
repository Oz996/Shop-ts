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

const ProductCard = ({ product }) => {
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
    <Card className="grid grid-rows-1 p-10">
      <CardContent className="flex justify-center">
        <Image
          className="self-center"
          src={product?.image}
          width={120}
          height={120}
          alt="Picture of product"
        ></Image>
      </CardContent>
      <CardTitle>{productTitle}</CardTitle>
      <CardContent className="flex justify-between p-0 my-8">
        <p className="font-semibold">€{product?.price}</p>
        <p className="flex items-center text-sm gap-1">
          <FaStar className="text-orange-300" size={14} />
          {product?.rating?.rate}
        </p>
      </CardContent>
      <CardFooter className="justify-between p-0">
        <Button className="flex gap-1 bg-slate-600">
          <RiShoppingBasket2Fill size={17}/> Add to Cart
        </Button>
        <Button className="bg-slate-600">
          <Link href={`/products/${product?.id}`}>More Info</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
