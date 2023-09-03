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
import { Button } from "./ui/button";

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
      <CardContent className="flex justify-between gap-1 p-0 my-8">
        <p className="font-semibold">€{product?.price}</p>
        <p className="flex items-center">
          <FaStar className="text-orange-300" size={17} />
          {product?.rating?.rate}
        </p>
      </CardContent>
      <CardFooter className="justify-between p-0">
        <Button>Add to Cart</Button>
        <Button>More Info</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
