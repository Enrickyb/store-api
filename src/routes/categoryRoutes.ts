import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController/CategoryController";
import { authMiddleWare } from "../middlewares/userMiddlerwares/authMiddleWare";
import { serverAdminMiddleware } from "../middlewares/userMiddlerwares/serverAdminMIddleWare";

const router = Router();

router.post(
  "/create",
  authMiddleWare,
  serverAdminMiddleware,
  CategoryController.CategoryCreate
);

router.get(
  "/all",
  authMiddleWare,
  serverAdminMiddleware,
  CategoryController.GetAllCategories
);

router.delete(
  "/delete/:category_id",
  authMiddleWare,
  serverAdminMiddleware,
  CategoryController.DeleteCategory
);

export { router as categoryRouter };
