import ProductCard from "@/components/ProductCard";
import GET from "../api/products/route";
import Filter from "@/components/Filter";

export default async function Page() {
  const data = await GET();
  console.log(data);

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
