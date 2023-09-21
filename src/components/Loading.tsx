"use client";
import { useProductStore } from "@/store/productStore";

const Loading: React.FC = () => {
  const { products } = useProductStore();

  return (
    <>
      {!products.length && (
        <div className="flex items-center gap-3 mt-20">
          <span className="text-3xl text-foorangeLight font-semibold">
            Loading
          </span>
          <div className="animate-spin w-5 h-5 border-dashed border-4 rounded-full p-3 border-foorangeLight"></div>
        </div>
      )}
    </>
  );
};

export default Loading;
