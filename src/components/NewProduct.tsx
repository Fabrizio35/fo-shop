"use client";
import { useProductStore } from "@/store/productStore";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/types/types";

const NewProduct: React.FC = () => {
  const { products } = useProductStore();
  const [newProduct, setNewProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((data) => setNewProduct(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {products.length && newProduct ? (
        <section className="w-11/12 sm:w-full flex mb-28 shadow-black shadow-lg rounded-bl-xl rounded-br-xl">
          <div className="relative h-96 w-full sm:w-2/4">
            <Image
              src={newProduct?.images[3]}
              alt={`${newProduct?.title} image`}
              fill
              priority
              loading="eager"
              sizes="(max-width: 1px) auto"
              className="rounded-bl-xl rounded-br-xl sm:rounded-br-none border-t-2 border-l-2 border-b-2 border-gray-200 object-cover"
            />
            <div className="w-full bg-black/80 p-6 absolute bottom-0 flex flex-col select-none rounded-bl-xl rounded-br-xl sm:rounded-br-none gap-4 lg:items-center">
              <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                <span className="text-fosemiLight text-4xl font-semibold">
                  ¡NEW!
                </span>
                <div className="flex gap-2 items-center">
                  <span className="text-2xl text-gray-200">
                    {newProduct?.brand}
                  </span>
                  <span className="text-3xl text-fosemiLight font-semibold">
                    {newProduct?.title}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-xl">{newProduct?.description}</p>
            </div>
          </div>
          <div className="relative h-96 w-2/4 hidden sm:flex">
            <Image
              src={newProduct?.images[0]}
              alt={`${newProduct?.title} image`}
              fill
              priority
              loading="eager"
              sizes="(max-width: 1px) auto"
              className="rounded-br-xl object-cover"
            />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default NewProduct;
