import { productCreate } from "./ActionsController.ts/Create.Action";
import { deleteProduct } from "./ActionsController.ts/Delete.Action";
import { getAllProducts } from "./ActionsController.ts/GetAll.Action";
import { getByCategory } from "./ActionsController.ts/GetByCategory.Action";
import { updateProduct } from "./ActionsController.ts/UpdateProduct";

export const ProductController = {
  ProductCreate: (req, res) => {
    productCreate(req, res);
  },

  GetAllProducts: (req, res) => {
    getAllProducts(req, res);
  },

  DeleteProduct: (req, res) => {
    deleteProduct(req, res);
  },

  UpdateProduct: (req, res) => {
    updateProduct(req, res);
  },

  GetByCategory: (req, res) => {
    getByCategory(req, res);
  },
};
