import { Product } from "@/types/product";

// We can declare a variable, or use type assertion as shown in the examples below or we can declare
// that we are expecting to return a promise which expects data of the GetProducts interface

export default async function GET(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    // const data: Product[] = await res.json(); Type annotation
    // const data = (await res.json()) as Product[]; Type assertion
    const data = await res.json();
    console.log(res);
    return data;
  } catch {
    throw new Error("Failed to fetch data(products)");
  }
}
