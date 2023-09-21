"use client";
import { useProductStore } from "@/store/productStore";
import { ShoppingCartOffIcon } from "@/Icons";

const EmptyCart: React.FC = () => {
  const { cart } = useProductStore();

  return (
    <>
      {!cart.length ? (
        <div className="flex items-center gap-2 mt-20 text-foorangeLight relative select-none">
          <span className="text-3xl font-semibold">Empty Cart</span>
          <ShoppingCartOffIcon size="34" />
          <div className="absolute bg-foorangeLight h-1 w-full bottom-0 mb-[-6px] rounded-xl" />
        </div>
      ) : null}
    </>
  );
};

export default EmptyCart;
