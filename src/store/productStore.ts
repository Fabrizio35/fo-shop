import { create } from "zustand";
import { Product } from "@/types/types";

interface ProductStore {
  allProducts: Product[];
  products: Product[];
  cart: Product[];
  totalCart: number;
  currentPage: number;
  totalPages: number;
  ITEMS_PER_PAGE: number;
  getProducts: () => void;
  setProductsByInput: (input: string) => void;
  filterProductsByCategory: (category: string) => void;
  resetProducts: () => void;
  addCart: (product: Product) => void;
  removeCart: (id: number, price: number) => void;
  setCurrentPage: (page: number) => void;
}

export const useProductStore = create<ProductStore>(
  (set, get): ProductStore => ({
    allProducts: [],
    products: [],
    cart: [],
    totalCart: 0,
    currentPage: 1,
    totalPages: 0,
    ITEMS_PER_PAGE: 12,
    getProducts: async () => {
      const { ITEMS_PER_PAGE } = get();
      const response = await fetch(`https://dummyjson.com/products?limit=99`);
      const data = await response.json();
      const allProducts = data.products;
      const products = data.products;
      const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
      set((state) => ({
        ...state,
        products,
        totalPages,
        allProducts,
      }));
    },
    setProductsByInput: async (input: string) => {
      const { ITEMS_PER_PAGE, allProducts } = get();
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${input}`
      );
      const data = await response.json();
      const productsRaw = data.products;
      const products =
        productsRaw.length <= 0 || input === "" ? allProducts : productsRaw;
      const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
      set((state) => ({
        ...state,
        products,
        totalPages,
        currentPage: 1,
      }));
    },
    filterProductsByCategory: async (category: string) => {
      const { ITEMS_PER_PAGE, allProducts } = get();
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = await response.json();
      const productsRaw = data.products;
      const products = productsRaw.length <= 0 ? allProducts : productsRaw;
      const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
      set((state) => ({
        ...state,
        products,
        totalPages,
        currentPage: 1,
      }));
    },
    resetProducts: () => {
      const { allProducts, ITEMS_PER_PAGE } = get();
      const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);
      set((state) => ({
        ...state,
        products: allProducts,
        totalPages,
        currentPage: 1,
      }));
    },
    addCart: (product: Product) => {
      set((state) => ({
        ...state,
        cart: [product, ...state.cart],
        totalCart: state.totalCart + product.price,
      }));
    },
    removeCart: (id: number, price: number) => {
      set((state) => ({
        ...state,
        cart: state.cart.filter((product) => product.id !== id),
        totalCart: state.totalCart - price,
      }));
    },
    setCurrentPage: (page: number) => {
      set((state) => ({
        ...state,
        currentPage: page,
      }));
    },
  })
);
