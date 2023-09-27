"use client";
import { useProductStore } from "@/store/productStore";
import CartProductCard from "./CartProductCard";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const CartProductsList: React.FC = () => {
  const { cart, products } = useProductStore();
  const router = useRouter();

  useEffect(() => {
    if (products.length <= 0) router.push("/");
  }, []);

  return (
    <div className="flex flex-col mt-10 gap-8">
      {cart.map((product) => (
        <CartProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartProductsList;
