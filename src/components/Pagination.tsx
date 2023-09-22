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
        <div className="flex my-16 justify-between h-10">
          <button
            onClick={prevHandler}
            disabled={currentPage === 1}
            className="hover:bg-gray-400 hover:text-black bg-gray-500 text-fosemiLight disabled:cursor-not-allowed disabled:bg-gray-200 px-4 disabled:text-gray-400 hover:transition-colors duration-300 rounded-tl-md rounded-bl-md"
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
                  : "text-fosemiLight hover:bg-fosemiDarkLight bg-fosemiDark"
              } w-full text-xl hover:transition-colors duration-300`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            onClick={nextHandler}
            disabled={currentPage >= totalPages}
            className="hover:bg-gray-400 hover:text-black bg-gray-500 text-fosemiLight disabled:cursor-not-allowed disabled:bg-gray-200 px-4 disabled:text-gray-400 hover:transition-colors duration-300 rounded-tr-md rounded-br-md"
          >
            <ArrowRightIcon />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
