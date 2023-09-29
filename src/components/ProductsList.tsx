"use client";
import { useEffect } from "react";
import { useProductStore } from "@/store/productStore";
import ProductCard from "./ProductCard";

const ProductsList: React.FC = () => {
  const { products, currentPage, ITEMS_PER_PAGE, getProducts } =
    useProductStore();

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const finalProducts = products.slice(startIndex, endIndex);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-14 w-11/12 sm:w-full">
      {finalProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
