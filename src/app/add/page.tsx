"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export default function Page() {
  const initialState: Product = {
    id: crypto.randomUUID(),
    title: "",
    price: "",
    category: "mens" || "womens" || "jewelery" || "electronics",
    description: "",
    image: "string",
    rating: {
      count: 0,
      rate: 0,
    },
  };
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleNewProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const { title, description, price, image, category } = formData;
    if (!title || !description || !price || !image || !category) {
      setError("Fill out all the fields");
      return;
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
            <Input name="title" id="title" />
          </div>
          <div className="w-[47%]">
            <Label className="text-md" htmlFor="price">
              Price
            </Label>
            <Input name="price" id="price" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[47%]">
            <Label className="text-md" htmlFor="image">
              ImageURL
            </Label>
            <Input name="image" id="image" />
          </div>
          <div className="w-[47%]">
            <Label className="text-md" htmlFor="category">
              Category
            </Label>
            <Input name="category" id="category" />
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
          />
        </div>
        {error && (
          <Alert variant="destructive" className="text-center">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Button className="w-full bg-slate-600">Add</Button>
      </form>
    </section>
  );
}
