import { Product } from "@/types/types";
import Image from "next/image";
import { TrashIcon } from "@/Icons";
import { useProductStore } from "@/store/productStore";
import { useState } from "react";

interface Props {
  product: Product;
}

const CartProductCard: React.FC<Props> = ({ product }) => {
  const { removeCart } = useProductStore();
  const [isRemoved, setIsRemoved] = useState<boolean>(false);

  const handleRemove = () => {
    setIsRemoved(true);
    setTimeout(() => {
      removeCart(product.id, product.price);
    }, 300);
  };

  return (
    <div
      className={`flex justify-between items-center bg-fosemiDark p-5 rounded-xl shadow-xl relative ${
        isRemoved
          ? "opacity-0 transform translate-x-32 transition-opacity duration-300 ease-out"
          : null
      }`}
    >
      <button
        onClick={handleRemove}
        className="absolute top-0 right-0 mt-[-14px] mr-[-14px] bg-fodark border-folight border-4 text-red-400 rounded-full p-1.5 cursor-pointer hover:bg-fosemiDark hover:text-red-300 hover:transition-colors duration-500"
      >
        <TrashIcon size="28" />
      </button>

      <div className="relative h-28 w-28">
        <Image
          src={product.thumbnail}
          alt={`${product.title} image`}
          fill
          priority
          sizes="(max-width: 0) auto"
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-3xl text-folight">{product.title}</span>
        <span className="text-xl text-gray-400">{product.brand}</span>
      </div>

      <span className="text-3xl text-folight font-semibold">
        ${product.price}
      </span>
    </div>
  );
};

export default CartProductCard;
