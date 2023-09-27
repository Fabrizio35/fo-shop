"use client";
import { useProductStore } from "@/store/productStore";
import { useState, useEffect } from "react";
import { Categories } from "@/types/types";

const SortAndFilter: React.FC = () => {
  const {
    products,
    filterProductsByCategory,
    filterProductsByPrice,
    orderAlpha,
    resetProducts,
  } = useProductStore();

  const [categories, setCategories] = useState<Categories[] | null>(null);

  const [state, setState] = useState({
    filterCategory: "all-products",
    filterPrice: 0,
    setOrder: "default",
  });

  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const property = e.target.name;
    const id = e.target.id;
    const type = e.target.type;

    setState({
      ...state,
      [property]: type === "range" ? parseInt(value) : value,
    });

    id === "setOrder"
      ? orderAlpha(value)
      : id === "filterCategory"
      ? filterProductsByCategory(value)
      : filterProductsByPrice(parseInt(value));
  };

  const resetFiltersHandler = () => {
    setState({
      filterCategory: "all-products",
      filterPrice: 0,
      setOrder: "default",
    });
    resetProducts();
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
        <div className="flex justify-between items-center bg-fosemiDark p-4 rounded-md">
          <button
            onClick={resetFiltersHandler}
            className="bg-fosemiLight text-red-500 font-medium py-1 px-3 hover:bg-folight hover:text-red-600 hover:transition-colors duration-300"
          >
            Reset Products
          </button>
          <div className="flex flex-col items-center gap-3">
            <span className="text-lg text-fosemiLight">
              Order alphabetically
            </span>
            <select
              id="setOrder"
              name="setOrder"
              value={state.setOrder}
              onChange={changeHandler}
              className="bg-fosemiLight text-fosemiDark h-11 outline-none w-44 cursor-pointer font-medium"
            >
              <option value="default" className="font-medium">
                Default
              </option>
              <option value="az" className="font-medium">
                A - Z
              </option>
              <option value="za" className="font-medium">
                Z - A
              </option>
            </select>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-lg text-fosemiLight">Filter by category</span>
            <select
              id="filterCategory"
              name="filterCategory"
              value={state.filterCategory}
              onChange={changeHandler}
              className="bg-fosemiLight text-fosemiDark h-11 outline-none w-44 cursor-pointer font-medium"
            >
              <option value="all-products" className="font-medium">
                All products
              </option>
              {categories?.map((category, index) => (
                <option key={index} value={category} className="font-medium">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-5 items-center">
              <label htmlFor="filterPrice" className="text-fosemiLight text-lg">
                Price from:
              </label>
              <span className="text-fosemiLight text-lg">
                ${state.filterPrice}
              </span>
            </div>

            <input
              type="range"
              name="filterPrice"
              min={0}
              max={1749}
              id="filterPrice"
              onChange={changeHandler}
              value={state.filterPrice}
              className="w-96"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SortAndFilter;
