"use client";
import { useProductStore } from "@/store/productStore";
import { ArrowRightIcon, ArrowLeftIcon } from "@/Icons";

const Pagination: React.FC = () => {
  const { currentPage, totalPages, setCurrentPage, products } =
    useProductStore();

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  const nextHandler = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevHandler = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {products.length ? (
        <div className="flex my-20 justify-between">
          <button
            onClick={prevHandler}
            disabled={currentPage === 1}
            className="hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-transparent py-1 px-2 rounded-md disabled:text-gray-400 hover:transition-colors duration-300"
          >
            <ArrowLeftIcon />
          </button>
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`${
                pageNumber === currentPage
                  ? "text-folight bg-foorange"
                  : "text-fodark hover:bg-gray-200"
              } py-1 px-3 rounded-md text-xl hover:transition-colors duration-300`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            onClick={nextHandler}
            disabled={currentPage >= totalPages}
            className="hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-transparent py-1 px-2 rounded-md disabled:text-gray-400 hover:transition-colors duration-300"
          >
            <ArrowRightIcon />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
