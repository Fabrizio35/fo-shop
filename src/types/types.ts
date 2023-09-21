export interface ApResults {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export enum Categories {
  SMARTHPHONES = "smartphones",
  LAPTOPS = "laptops",
  FRAGRANCES = "fragrances",
  SKINCARE = "skincare",
  GROCERIES = "groceries",
  HOME_DECORATION = "home-decoration",
  FURNITURE = "furniture",
  TOPS = "tops",
  WOMENS_DRESSES = "womens-dresses",
  WOMENS_SHOES = "womens-shoes",
  MENS_SHIRTS = "mens-shirts",
  MENS_SHOES = "mens-shoes",
  MENS_WATCHES = "mens-watches",
  WOMENS_WATCHES = "womens-watches",
  WOMENS_BAGS = "womens-bags",
  WOMENS_JEWELLERY = "womens-jewellery",
  SUNGLASSES = "sunglasses",
  AUTOMOTIVE = "sunglasses",
  MOTORCYCLE = "motorcycle",
  LIGHTING = "lighting",
}
