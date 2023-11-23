import { Router } from "express";
import { UserWalletController } from "../controllers/WalletsController/UserWalletController/UserWalletController";
import { authMiddleWare } from "../middlewares/userMiddlerwares/authMiddleWare";
import { clientAdminMiddleware } from "../middlewares/userMiddlerwares/clientAdminMIddleWare";
import { serverAdminMiddleware } from "../middlewares/userMiddlerwares/serverAdminMIddleWare";

const router = Router();

router.get(
  "/all",
  authMiddleWare,
  serverAdminMiddleware,
  UserWalletController.GetAllWallets
);

router.put(
  "/set_renew_credit/:id",
  authMiddleWare,
  clientAdminMiddleware,
  UserWalletController.SetRenewCredit
);

export { router as userWalletRouter };
