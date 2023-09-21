import Header from "@/components/Header";
import CartProductsList from "@/components/CartProductsList";
import TotalCart from "@/components/TotalCart";
import EmptyCart from "@/components/EmptyCart";

export default function CartPage() {
  return (
    <main className="bg-folight min-h-screen flex flex-col items-center overflow-hidden">
      <Header />
      <EmptyCart />
      <section className="container mx-auto">
        <CartProductsList />
        <TotalCart />
      </section>
    </main>
  );
}
