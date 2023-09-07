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

export default async function Page() {
  const data = await GET();

  return (
    <>
      <section className="pt-20 container mx-auto">
        <h1 className="text-center text-2xl font-semibold">Products</h1>
        <div className="flex pt-5">
          <div className="flex flex-col w-[70%]">
            <Label htmlFor="search" className="hidden">
              Search
            </Label>

            <Input name="search" id="search"></Input>
          </div>
          <div className="flex flex-col w-[30%]">
            <Label htmlFor="filter" className="hidden">
              Filter
            </Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="mens">Men's Clothing</SelectItem>
                  <SelectItem value="womens">Women's Clothing</SelectItem>
                  <SelectItem value="jewelry">Jewelry</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <main className="container mx-auto grid grid-cols-4 gap-5 pt-20">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </>
  );
}
