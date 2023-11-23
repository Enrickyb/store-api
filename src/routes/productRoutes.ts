import { Router } from "express";
import { ProductController } from "../controllers/ProductController/ProductController";
import { authMiddleWare } from "../middlewares/userMiddlerwares/authMiddleWare";
import { serverAdminMiddleware } from "../middlewares/userMiddlerwares/serverAdminMIddleWare";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${uuidv4()} - ${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const router = Router();

router.post(
  "/create",
  authMiddleWare,
  serverAdminMiddleware,
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  ProductController.ProductCreate
);
router.get(
  "/all",
  authMiddleWare,
  serverAdminMiddleware,
  ProductController.GetAllProducts
);
router.delete(
  "/delete/:product_id",
  authMiddleWare,
  serverAdminMiddleware,
  ProductController.DeleteProduct
);
router.put(
  "/update/:product_id",
  authMiddleWare,
  serverAdminMiddleware,
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  ProductController.UpdateProduct
);
router.get(
  "/category/:category_id",
  authMiddleWare,
  serverAdminMiddleware,
  ProductController.GetByCategory
);

export { router as productRouter };
