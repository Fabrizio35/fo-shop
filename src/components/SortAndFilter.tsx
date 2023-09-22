"use client";
import { useProductStore } from "@/store/productStore";
import { useState, useEffect } from "react";
import { Categories } from "@/types/types";

const SortAndFilter: React.FC = () => {
  const { products, filterProductsByCategory } = useProductStore();
  const [categories, setCategories] = useState<Categories[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("filter-by");

  const categoriesChangeHandler = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setSelectedCategory(value);
    filterProductsByCategory(value);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      {products.length ? (
        <div className="bg-fosemiDark">
          <select
            name="filter-by"
            value={selectedCategory}
            onChange={categoriesChangeHandler}
          >
            <option value="filter-by">All products</option>
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
