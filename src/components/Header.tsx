"use client";
import {
  ShoppingCartFilledIcon,
  ShoppingCartIcon,
  HomeIcon,
  SearchIcon,
  RefreshIcon,
} from "@/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProductStore } from "@/store/productStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const path = usePathname();
  const router = useRouter();
  const { products, setProducts, resetProducts } = useProductStore();

  const [searchInput, setSearchInput] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  useEffect(() => {
    if (products.length <= 0) router.push("/");
  }, []);

  return (
    <>
      {products.length ? (
        <header className="bg-foorange p-3 text-folight flex items-center justify-evenly w-full z-50">
          <Link
            href="/"
            className="flex items-center justify-center gap-1 select-none"
          >
            <h2 className="text-3xl font-semibold">FO Shop</h2>
            <ShoppingCartFilledIcon size="34" />
          </Link>

          {path === "/" && (
            <div className="flex items-center gap-2">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for a product"
                  value={searchInput}
                  onChange={changeHandler}
                  className="bg-foorangeFullLight border-2 border-foorangeFullLight h-8 w-60 text-fosemiDark focus:outline-none focus:border-fosemiDarkLight p-2 hover:border-fosemiDarkLight hover:transition-colors duration-300"
                />
                <button
                  onClick={() => setProducts(searchInput)}
                  className="bg-foorangeFullLight text-fosemiDarkLight h-8 flex items-center px-2 cursor-pointer hover:text-fodark hover:transition-colors duration-300 border-2 border-foorangeFullLight hover:border-fosemiDarkLight"
                >
                  <SearchIcon />
                </button>
              </div>
              <button
                onClick={() => resetProducts()}
                className="flex items-center p-2 gap-1 bg-foorangeFullLight h-8 text-fosemiDarkLight hover:text-fodark border-2 border-foorangeFullLight hover:border-fosemiDarkLight hover:transition-colors duration-300"
              >
                <span>Return all products</span>
                <RefreshIcon size="22" />
              </button>
            </div>
          )}

          <nav className="flex">
            {path === "/" && (
              <Link
                href="/cart"
                className="flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-foorangeLight hover:transition-colors duration-300"
              >
                <span className="text-lg font-medium">My cart</span>
                <ShoppingCartIcon size="24" />
              </Link>
            )}
            {path === "/cart" && (
              <Link
                href="/"
                className="flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-foorangeLight hover:transition-colors duration-300"
              >
                <span className="text-base font-medium">Back home</span>
                <HomeIcon size="22" />
              </Link>
            )}
          </nav>
        </header>
      ) : null}
    </>
  );
};

export default Header;
