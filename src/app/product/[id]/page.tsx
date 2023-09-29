import Header from "@/components/Header";
import ProductDetail from "@/components/ProductDetail";

const Detail = () => {
  return (
    <main className="bg-folight min-h-screen flex flex-col items-center">
      <Header />
      <section className="flex justify-center sm:container sm:mx-auto sm:w-[1200px]">
        <ProductDetail />
      </section>
    </main>
  );
};

export default Detail;
