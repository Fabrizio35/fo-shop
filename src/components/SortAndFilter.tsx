"use client";
import { useProductStore } from "@/store/productStore";
import { useState, useEffect } from "react";
import { Categories } from "@/types/types";

const SortAndFilter: React.FC = () => {
  const { products, filterProductsByCategory, filterProductsByPrice } =
    useProductStore();
  const [categories, setCategories] = useState<Categories[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("filter-by");
  const [price, setPrice] = useState<number>(0);

  const categoriesChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    filterProductsByCategory(value);
  };

  const priceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPrice(parseInt(value));
    filterProductsByPrice(parseInt(value));
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {products.length ? (
        <div className="flex justify-evenly items-center">
          <div className="flex flex-col items-center gap-3">
            <span className="text-lg text-fodark">Filter by category</span>
            <select
              name="filter-by"
              value={selectedCategory}
              onChange={categoriesChangeHandler}
              className="bg-fosemiDark text-folight h-11 outline-none"
            >
              <option value="filter-by">All products</option>
              {categories?.map((category, index) => (
                <option key={index} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-5 items-center">
              <label htmlFor="range-price" className="text-fodark text-lg">
                Price from:
              </label>
              <span className="text-fodark text-lg">${price}</span>
            </div>

            <input
              type="range"
              name="range-price"
              min={0}
              max={1749}
              id="range-price"
              onChange={priceChangeHandler}
              value={price}
              className="w-96"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SortAndFilter;
