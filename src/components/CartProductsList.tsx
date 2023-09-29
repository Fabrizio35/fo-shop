"use client";
import { useProductStore } from "@/store/productStore";
import CartProductCard from "./CartProductCard";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const CartProductsList: React.FC = () => {
  const { cart, products } = useProductStore();
  const router = useRouter();

  useEffect(() => {
    if (!products.length) router.push("/");
  }, []);

  return (
    <div className="flex flex-col mt-10 gap-8 w-11/12 sm:w-11/12 xl:w-full">
      {cart.map((product) => (
        <CartProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartProductsList;
