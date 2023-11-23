import { Router } from "express";
import { OrderController } from "../controllers/OrderController/OrderController";
import { authMiddleWare } from "../middlewares/userMiddlerwares/authMiddleWare";
import { serverAdminMiddleware } from "../middlewares/userMiddlerwares/serverAdminMIddleWare";

const router = Router();

router.post("/create", authMiddleWare, OrderController.CreateOrder);
router.delete(
  "/delete/:order_id",
  authMiddleWare,
  serverAdminMiddleware,
  OrderController.DeleteOrder
);
router.get(
  "/all",
  authMiddleWare,
  serverAdminMiddleware,
  OrderController.GetAllOrders
);
router.get("/get/:order_id", authMiddleWare, OrderController.GetOrderById);
router.get("/user/:user_id", authMiddleWare, OrderController.GetOrderByUserId);
router.get(
  "/user/:client_id",
  authMiddleWare,
  OrderController.GetOrderByClientId
);
router.put("/update/:order_id", authMiddleWare, OrderController.UpdateOrder);

export { router as orderRouter };
