import { Category } from "@src/types";

export interface CategoryFilterContextDTO {
  categories: Category[];
  loading?: boolean;
}
