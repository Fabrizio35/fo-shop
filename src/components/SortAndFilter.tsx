"use client";
import { useProductStore } from "@/store/productStore";

const SortAndFilter: React.FC = () => {
  const { products } = useProductStore();

  return (
    <>
      {products.length ? (
        <div className="bg-fosemiDark">
          <select name="sortBy">
            <option value=""></option>
          </select>
        </div>
      ) : null}
    </>
  );
};

export default SortAndFilter;
