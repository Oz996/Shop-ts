import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data: Product = await res.json();
  return (
    <section className="pt-20 container mx-auto">
      <div className="grid grid-cols-2 gap-60 pt-10">
        <div className="min-h-[30rem]">
          <Image
            className="self-center"
            src={data?.image}
            width={400}
            height={400}
            alt="Picture of product"
          ></Image>
        </div>
        <div className="max-w-[30rem] grid">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">{data?.title}</h2>
            <p>{data?.description}</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-semibold">€{data?.price}</p>
            <Button className="bg-slate-600 w-32">Add to Cart</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
