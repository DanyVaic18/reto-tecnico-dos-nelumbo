import { Store } from "@tanstack/react-store";
import { ICategory } from "../types/category";

type StateCategory = {
  categorySelected: ICategory;
};
export const initAllCategory: ICategory = {
  id: 0,
  image: "",
  name: "Todas",
  creationAt: "2024-10-08",
  updatedAt: "2024-10-08",
};
export const useCategoryStore = new Store<StateCategory>({
  categorySelected: initAllCategory,
});
