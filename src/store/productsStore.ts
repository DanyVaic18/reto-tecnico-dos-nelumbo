import { Store,  } from "@tanstack/react-store";

type StateProducts = {
  searchNameProduct: string;
};

export const useProductsStore = new Store<StateProducts>({
  searchNameProduct: "",
});
