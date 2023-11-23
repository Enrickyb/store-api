import { Router } from "express";
import { TransactionsController } from "../controllers/WalletsController/TransactionsController/TransactionsController";
import { authMiddleWare } from "../middlewares/userMiddlerwares/authMiddleWare";
import { serverAdminMiddleware } from "../middlewares/userMiddlerwares/serverAdminMIddleWare";
const router = Router();

router.get(
  "/all",
  authMiddleWare,
  serverAdminMiddleware,
  TransactionsController.GetAllTransactions
);
router.get(
  "/client/:client_id",
  authMiddleWare,
  serverAdminMiddleware,
  TransactionsController.GetTransactionByClient
);
router.get(
  "/id/:id",
  authMiddleWare,
  serverAdminMiddleware,
  TransactionsController.GetTransactionById
);
router.get(
  "/server",
  authMiddleWare,
  serverAdminMiddleware,
  TransactionsController.GetTransactionFromServer
);
router.get(
  "/date",
  authMiddleWare,
  serverAdminMiddleware,
  TransactionsController.GetTransactionByDate
);
router.get(
  "/type",
  authMiddleWare,
  serverAdminMiddleware,
  TransactionsController.GetTransactionByType
);

export { router as transactionRouter };
