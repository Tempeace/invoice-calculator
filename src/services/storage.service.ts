import { Product } from "@/views/BasketCalculator/types";

const PRODUCTS_KEY = "products";

const StorageService = {
  getProducts(): Array<Product> {
    const data = localStorage.getItem(PRODUCTS_KEY);
    if (data) {
      return JSON.parse(data);
    } else return [];
  },
  saveProducts(products: Array<Product>): void {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  },
};

export default StorageService;
