import { Product } from "@/types/types";
import { ShoppingCartPlusIcon, ShoppingCartOffIcon } from "@/Icons";
import { useProductStore } from "@/store/productStore";
import Image from "next/image";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { cart, addCart, removeCart } = useProductStore();

  const inCart = cart.find((prod) => prod.id === product.id);

  return (
    <div className="flex flex-col bg-fosemiDark shadow-xl rounded-lg">
      <div className="relative aspect-video">
        <Image
          src={product.thumbnail}
          alt={`${product.title} image`}
          fill
          priority
          sizes="(max-width: 0) auto"
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col justify-between bg-fosemiDark grow rounded-b-lg p-3 gap-4">
        <span className="text-xl text-folight">{product.title}</span>
        <span className="text-base text-gray-400">{product.brand}</span>
        <span className="text-2xl font-semibold text-folight">
          ${product.price}
        </span>
        {inCart ? (
          <button
            onClick={() => removeCart(product.id, product.price)}
            className="flex items-center justify-center gap-2 bg-fodark text-red-500 hover:bg-fosemiDarkLight hover:text-red-300 rounded-lg transition-colors hover:transition-colors duration-500 "
          >
            <ShoppingCartOffIcon size="22" />
            <span className="text-lg">Remove from cart</span>
          </button>
        ) : (
          <button
            onClick={() => addCart(product)}
            className="flex items-center justify-center gap-2 bg-foorange text-folight hover:bg-foorangeLight rounded-lg transition-colors hover:transition-colors duration-500"
          >
            <ShoppingCartPlusIcon size="22" />
            <span className="text-lg">Add to cart</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
