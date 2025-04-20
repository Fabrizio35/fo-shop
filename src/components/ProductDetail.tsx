"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Product } from "@/types/types";
import { ShoppingCartOffIcon, ShoppingCartPlusIcon } from "@/Icons";
import { useProductStore } from "@/store/productStore";
import Image from "next/image";

const ProductDetail: React.FC = () => {
  const params = useParams().id;
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const { products, cart, removeCart, addCart } = useProductStore();
  const [selectedImage, setSelectedImage] = useState<string>("");

  const inCart = cart.find((prod) => prod.id === product?.id);

  useEffect(() => {
    if (products.length <= 0) router.push("/");

    fetch(`https://dummyjson.com/products/${params}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {products.length && product ? (
        <section className="flex flex-col lg:flex-row w-11/12 lg:w-full justify-center my-10">
          <div className="flex lg:w-3/4 bg-fosemiDarkLight p-5 lg:rounded-tl-lg lg:rounded-bl-lg">
            <div className="flex gap-3 flex-col justify-center w-1/4 mr-3">
              {product?.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative aspect-video hover:border-foorange hover:border-4 cursor-pointer ${
                    image === selectedImage && "border-4 border-foorange"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.title} image`}
                    fill
                    priority
                    sizes="(max-width: 1px) auto"
                    onClick={() => setSelectedImage(image)}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {product ? (
              <div className="relative w-3/4 ml-3 h-full">
                <Image
                  src={!selectedImage ? product.thumbnail : selectedImage}
                  alt={`${product.title} image`}
                  fill
                  priority
                  sizes="(max-width: 1px) auto"
                />
              </div>
            ) : null}
          </div>

          <div className="flex flex-col lg:w-1/4 relative p-5 bg-fosemiDark lg:rounded-tr-lg lg:rounded-br-lg">
            <span className="text-lg text-gray-400 absolute top-1 left-3">
              {product
                ? product?.category[0].toUpperCase() +
                  product?.category.slice(1)
                : null}
            </span>

            <span className="absolute top-1 right-3 text-gray-400 text-lg">
              #{product?.id}
            </span>

            <div className="flex flex-col gap-2 mt-10 w-full mb-5">
              <h1 className="text-folight text-3xl font-medium">
                {product?.title}
              </h1>
              <span className="text-slate-400 text-xl font-semibold">
                {product?.brand}
              </span>
            </div>

            <p className="flex text-gray-300 w-full">{product?.description}</p>

            <div className="flex items-center justify-evenly w-full my-10 flex-col sm:flex-row lg:flex-col lg:gap-3 gap-3 sm:gap-0 xl:flex-row">
              <span className="text-folight text-4xl font-medium">
                ${product?.price}
              </span>
              <span className="text-red-600 text-lg font-medium border-2 border-red-600 px-1">
                {product?.discountPercentage}% OFF
              </span>
            </div>

            {inCart ? (
              <button
                onClick={() => removeCart(product.id, product.price)}
                className="flex items-center justify-center gap-2 mt-auto w-full bg-fodark text-red-500 hover:bg-fosemiDarkLight hover:text-red-300 rounded-md transition-colors hover:transition-colors duration-500 "
              >
                <div className="sm:hidden">
                  <ShoppingCartOffIcon size="22" />
                </div>

                <span className="text-lg">Remove from cart</span>
              </button>
            ) : (
              <button
                onClick={() => addCart(product)}
                className="flex items-center justify-center mt-auto gap-2 w-full bg-foorange text-folight hover:bg-foorangeLight rounded-md transition-colors hover:transition-colors duration-500"
              >
                <ShoppingCartPlusIcon size="22" />
                <span className="text-lg">Add to cart</span>
              </button>
            )}
          </div>
        </section>
      ) : (
        <div className="flex justify-center items-center gap-3 mt-20">
          <span className="text-3xl text-foorangeLight font-semibold">
            Loading
          </span>
          <div className="animate-spin w-5 h-5 border-dashed border-4 rounded-full p-3 border-foorangeLight"></div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
