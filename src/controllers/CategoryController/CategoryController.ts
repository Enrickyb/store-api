import { CategoryCreate } from "./ActionController/Create.Action";
import { deleteCategory } from "./ActionController/Delete.Action";
import { getAllCategories } from "./ActionController/GetAll.Action";
import { updateCategory } from "./ActionController/Update.Action";

export const CategoryController = {
  CategoryCreate: (req, res) => {
    CategoryCreate(req, res);
  },
  GetAllCategories: (req, res) => {
    getAllCategories(req, res);
  },

  DeleteCategory: (req, res) => {
    deleteCategory(req, res);
  },

  UpdateCategory: (req, res) => {
    updateCategory(req, res);
  },
};
