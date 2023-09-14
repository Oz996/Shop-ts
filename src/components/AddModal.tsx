"use client";
import { Dialog } from "./ui/dialog";
import ProductCard from "@/components/ProductCard";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/firebase";
import { CartItem } from "@/types/cart";
import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Page() {
  const initialState: CartItem = {
    id: crypto.randomUUID(),
    title: "",
    price: "",
    category: "mens" || "womens" || "jewelery" || "electronics",
    description: "",
    image: "",
    rating: {
      count: 0,
      rate: 0,
    },
    quantity: 0,
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState<string>("");
  const [newProducts, setNewProducts] = useState<CartItem[]>([]);
  console.log(newProducts);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleNewProduct = async (
    e: React.FormEvent
  ): Promise<CartItem | undefined> => {
    e.preventDefault();
    const { title, description, price, image, category } = formData;
    if (!title || !description || !price || !image || !category) {
      setError("Fill out all the fields");
      return;
    }
    try {
      const id = crypto.randomUUID();
      const newProduct = formData;
      await setDoc(doc(db, "Products", id), newProduct);
    } catch {
      setError("Failed to create new product");
    }
  };

  //   useEffect(() => {
  //     document.title = "Add";
  //   }, []);

  return (
    <section className="container mx-auto pt-20">
      <form
        className="max-w-[40rem] mx-auto p-10 flex flex-col gap-5"
        onSubmit={handleNewProduct}
      >
        <h1 className="text-center text-2xl font-semibold">Add new Product</h1>
        <div className="flex justify-between">
          <div className="w-[47%]">
            <Label className="text-md" htmlFor="title">
              Title
            </Label>
            <Input
              name="title"
              id="title"
              onChange={handleChange}
              value={formData.title}
            />
          </div>
          <div className="w-[47%]">
            <Label className="text-md" htmlFor="price">
              Price
            </Label>
            <Input
              name="price"
              id="price"
              onChange={handleChange}
              value={formData.price}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[47%]">
            <Label className="text-md" htmlFor="image">
              ImageURL
            </Label>
            <Input
              name="image"
              id="image"
              onChange={handleChange}
              value={formData.image}
            />
          </div>
          <div className="w-[47%] flex flex-col">
            <Label className="text-md" htmlFor="category">
              Category
            </Label>
            <select
              className="p-[.6rem]"
              name="category"
              id="category"
              onChange={handleChange}
              value={formData.category}
            >
              <option value="mens">Mens Clothing</option>
              <option value="womens">Womens Clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
        </div>
        <div>
          <Label className="text-md" htmlFor="description">
            Description
          </Label>
          <Textarea
            name="description"
            id="description"
            rows={10}
            className="resize-none"
            onChange={handleChange}
            value={formData.description}
          />
        </div>
        {error && (
          <Alert variant="destructive" className="text-center">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Button className="w-full bg-slate-600">Add</Button>
      </form>

      <div className="max-w-[40rem] mx-auto text-center flex flex-col gap-5">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
