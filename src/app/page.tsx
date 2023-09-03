'use client'
import { useProductContext } from "@/context/ProductContext"

const page = () => {
  const {products = [], setProducts} = useProductContext()
  console.log(products)
  return (
    <section className="container mx-auto">
      
    </section>
  )
}

export default page