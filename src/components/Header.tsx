"use client";
import {
  ShoppingCartFilledIcon,
  ShoppingCartIcon,
  HomeIcon,
  SearchIcon,
} from "@/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProductStore } from "@/store/productStore";
import { useState } from "react";

const Header: React.FC = () => {
  const path = usePathname();
  const { products, searchProducts } = useProductStore();

  const [searchInput, setSearchInput] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    searchProducts(value);
  };

  return (
    <>
      {products.length ? (
        <header className="bg-foorange p-3 text-folight flex items-center justify-between sm:justify-evenly w-full">
          <Link
            href="/"
            className="flex items-center justify-center gap-1 select-none"
          >
            <div className="flex gap-1.5">
              <h2 className="text-3xl font-semibold">FO</h2>
              <h2 className="text-3xl font-semibold hidden sm:flex">Shop</h2>
            </div>
            <ShoppingCartFilledIcon size="34" />
          </Link>

          {path === "/" && (
            <div className="flex flex-1 sm:flex-none mx-5 sm:mx-0 items-center relative border-2 pl-8 border-foorangeFullLight hover:border-fosemiDarkLight hover:transition-colors duration-300 focus-within:border-fosemiDarkLight">
              <div className="absolute left-0 text-fosemiDarkLight bg-foorangeFullLight h-full flex items-center px-2">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search for a product..."
                value={searchInput}
                onChange={changeHandler}
                className="bg-foorangeFullLight h-8 w-full sm:w-60 text-fosemiDark focus:outline-none px-2"
              />
            </div>
          )}

          <nav className="flex gap-5">
            {path === "/" || path.split("/")[1] === "product" ? (
              <Link
                href="/cart"
                className="flex items-center gap-1 py-1 px-2 rounded-md hover:bg-foorangeLight hover:transition-colors duration-300"
              >
                <span className="text-lg font-medium hidden sm:flex">
                  My cart
                </span>
                <ShoppingCartIcon size="24" />
              </Link>
            ) : null}
            {path === "/cart" || path.split("/")[1] === "product" ? (
              <Link
                href="/"
                className="flex items-center gap-1 py-1 px-2 rounded-md hover:bg-foorangeLight hover:transition-colors duration-300"
              >
                <span className="text-base font-medium hidden sm:flex">
                  Back home
                </span>
                <HomeIcon size="22" />
              </Link>
            ) : null}
          </nav>
        </header>
      ) : null}
    </>
  );
};

export default Header;
