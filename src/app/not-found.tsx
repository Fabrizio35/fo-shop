import { ShoppingCartFilledIcon, HomeIcon } from "@/Icons";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <section className="bg-folight">
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h2 className="text-4xl text-fodark font-semibold">
          Error 404 Not Found
        </h2>
        <div className="flex items-center justify-center gap-1 select-none text-foorange">
          <h2 className="text-3xl font-semibold">FO Shop</h2>
          <ShoppingCartFilledIcon size="34" />
        </div>
        <Link
          href="/"
          className="flex items-center text-foorange gap-1 py-1 px-2 rounded-md hover:bg-foorangeLight hover:text-fodark hover:transition-colors duration-300"
        >
          <span className="text-lg font-medium">Back home</span>
          <HomeIcon size="22" />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
