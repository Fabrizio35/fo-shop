import Header from "@/components/Header";
import CartProductsList from "@/components/CartProductsList";
import TotalCart from "@/components/TotalCart";
import EmptyCart from "@/components/EmptyCart";

export default function CartPage() {
  return (
    <main className="bg-folight min-h-screen flex flex-col items-center">
      <Header />
      <EmptyCart />
      <section className="w-full flex flex-col justify-center items-center sm:container sm:mx-auto sm:w-[1200px]">
        <CartProductsList />
        <TotalCart />
      </section>
    </main>
  );
}
