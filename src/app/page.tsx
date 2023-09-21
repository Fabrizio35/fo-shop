import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import ProductsList from "@/components/ProductsList";
import Loading from "@/components/Loading";
import NewProduct from "@/components/NewProduct";
import SortAndFilter from "@/components/SortAndFilter";

export default function MainApp() {
  return (
    <main className="bg-folight min-h-screen flex flex-col items-center">
      <Header />
      <Loading />
      <section className="container mx-auto w-[1200px]">
        <NewProduct />
        <SortAndFilter />
        <Pagination />
        <ProductsList />
      </section>
    </main>
  );
}
