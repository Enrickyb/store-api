import { Router } from "express";
import { ClientWalletController } from "../controllers/WalletsController/ClientWalletController/ClientWalletController";
import { authMiddleWare } from "../middlewares/userMiddlerwares/authMiddleWare";
import { clientAdminMiddleware } from "../middlewares/userMiddlerwares/clientAdminMIddleWare";
import { serverAdminMiddleware } from "../middlewares/userMiddlerwares/serverAdminMIddleWare";

const router = Router();

router.post(
  "/addcredit/:id",
  authMiddleWare,
  serverAdminMiddleware,
  ClientWalletController.AddCredit
);
router.post(
  "/removecredit/:id",
  authMiddleWare,
  serverAdminMiddleware,
  ClientWalletController.RemoveCredit
);
router.post(
  "/transfer",
  authMiddleWare,
  clientAdminMiddleware,
  ClientWalletController.TransferCredit
);

router.get(
  "/wallet/:id",
  authMiddleWare,
  serverAdminMiddleware,
  ClientWalletController.GetWalletById
);
router.get(
  "/all",
  authMiddleWare,
  serverAdminMiddleware,
  ClientWalletController.GetAllWallets
);

export { router as clientWalletRouter };
