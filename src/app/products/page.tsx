import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AiOutlineSearch } from "react-icons/ai";
import GET from "../api/products/route";
import { Categories } from "@/types/product";
import Filter from "@/components/Filter";

export default async function Page() {
  const data = await GET();
  console.log(data);

  const categoryOptions: Categories[] = [
    { value: "mens", label: "Men's Clothing" },
    { value: "womens", label: "Women's Clothing" },
    { value: "jewelery", label: "Jewelery" },
    { value: "electronics", label: "Electronics" },
  ];

  return (
    <>
      <section className="pt-20 container mx-auto">
        <h1 className="text-center text-2xl font-semibold">Products</h1>
        <Filter data={data} />
      </section>

      <main className="container mx-auto grid grid-cols-4 gap-5 pt-20">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </>
  );
}
