"use client";
import { useProductStore } from "@/store/productStore";
import CartProductCard from "./CartProductCard";

const CartProductsList: React.FC = () => {
  const { cart } = useProductStore();

  return (
    <div className="flex flex-col mt-10 gap-10">
      {cart.map((product) => (
        <CartProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartProductsList;
