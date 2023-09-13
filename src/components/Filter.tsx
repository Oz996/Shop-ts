"use client";
import { Product, DataProps, Categories } from "@/types/product";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";

const Filter: React.FC<DataProps> = ({ data }) => {
  const [category, setCategory] = useState<string>("all");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  };

  const filteredData =
    category === "all"
      ? data
      : data.filter((product) => product.category === category);

  console.log(category);

  const categoryOptions: Categories[] = [
    { value: "mens", label: "Men's Clothing" },
    { value: "womens", label: "Women's Clothing" },
    { value: "jewelery", label: "Jewelery" },
    { value: "electronics", label: "Electronics" },
  ];

  return (
    <div className="flex pt-5">
      <div className="flex flex-col w-[70%]">
        <Label htmlFor="search" className="hidden">
          Search
        </Label>
        <Input name="search" id="search"></Input>
      </div>
      <div className="w-[30%]">
        <select
          onChange={handleCategoryChange}
          value={category}
          className="p-[.6rem]"
        >
          <option value="all">Filter by category</option>
          <option value="mens">Mens Clothing</option>
          <option value="womens">Womens Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
