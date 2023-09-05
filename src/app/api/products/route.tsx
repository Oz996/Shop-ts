import { Product } from "@/types";

export default async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    // const data: Product[] = await res.json();
    const data = (await res.json()) as Product[];
    return data
  } catch (error) {
    console.error(error);
  }
}
