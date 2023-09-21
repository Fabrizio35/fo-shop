"use client";
import { useProductStore } from "@/store/productStore";
import { useState, useEffect } from "react";
import { Categories } from "@/types/types";

const SortAndFilter: React.FC = () => {
  const { products } = useProductStore();
  const [categories, setCategories] = useState<Categories[] | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      {products.length ? (
        <div className="bg-fosemiDark">
          <select name="Filter By">
            <option value="Filter by">Filter by</option>
            {categories?.map((category, index) => (
              <option key={index} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      ) : null}
    </>
  );
};

export default SortAndFilter;
