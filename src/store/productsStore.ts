import { Store } from "@tanstack/react-store";

type StateProducts = {
  searchNameProduct: string;
  minPriceProduct: number;
  maxPriceProduct: number;
};

export const useProductsStore = new Store<StateProducts>({
  searchNameProduct: "",
  maxPriceProduct: 0,
  minPriceProduct: 0,
});
