import AddButton from "@/components/AddButton";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import Image from "next/image";
import { ReactElement } from "react";

export default async function Page({
  params,
}: {
  params: { id: number };
}): Promise<ReactElement> {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product: Product = await res.json();
  return (
    <section className="pt-20 container mx-auto">
      <div className="grid grid-cols-2 gap-60 pt-10">
        <div className="min-h-[30rem]">
          <Image
            className="self-center"
            src={product?.image}
            width={400}
            height={400}
            alt="Picture of product"
          ></Image>
        </div>
        <div className="max-w-[30rem] grid">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">{product?.title}</h2>
            <p>{product?.description}</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-semibold">€{product?.price}</p>
            <AddButton product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}
