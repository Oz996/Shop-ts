'use client'
import ProductCard from "@/components/ProductCard"
import { useProductContext } from "@/context/ProductContext"

const page = () => {
    const {products = [], setProducts} = useProductContext()
    console.log(products)
  return (
    <section>
        <div className="container mx-auto grid grid-cols-4 pt-20 gap-5">
          <h1>Filters</h1>
          <div>
          </div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    </section>
  )
}

export default page