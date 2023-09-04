import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data: Product = await res.json();
  return (
    <section className="pt-20 container mx-auto">
      <div className="grid grid-cols-2 gap-60 pt-10">
        <div className="">
          <Image
            className="self-center"
            src={data?.image}
            width={400}
            height={400}
            alt="Picture of product"
          ></Image>
        </div>
        <div className="max-w-[30rem] grid">
          <h2 className="text-3xl font-bold">{data?.title}</h2>
          <p>{data?.description}</p>
          <p className="text-xl font-semibold">€{data?.price}</p>
          <div>
            <Button className="bg-slate-600">Add to Cart</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
