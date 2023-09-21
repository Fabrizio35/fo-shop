"use client";
import { useProductStore } from "@/store/productStore";

const TotalCart: React.FC = () => {
  const { totalCart, cart } = useProductStore();

  return (
    <>
      {cart.length ? (
        <div className="flex justify-between w-full border-b-0 border-r-0 border-l-0 border-dashed border-t-4 border-fodark my-10">
          <span className="text-3xl mt-4">Total:</span>
          <span className="text-3xl mt-4 font-semibold">${totalCart}</span>
        </div>
      ) : null}
    </>
  );
};

export default TotalCart;
