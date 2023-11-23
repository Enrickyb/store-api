import { Router } from "express";
import { ClientController } from "../controllers/ClientController/ClientController";
import { authMiddleWare } from "../middlewares/userMiddlerwares/authMiddleWare";
import { serverAdminMiddleware } from "../middlewares/userMiddlerwares/serverAdminMIddleWare";

const router = Router();

router.post(
  "/create",
  //authMiddleWare,
  //serverAdminMiddleware,
  ClientController.ClientCreate
);

router.put(
  "/update/:id",
  authMiddleWare,
  serverAdminMiddleware,
  ClientController.ClientUpdate
);

router.delete(
  "/delete/:id",
  authMiddleWare,
  serverAdminMiddleware,
  ClientController.ClientDelete
);

router.get(
  "/client/:id",
  authMiddleWare,
  serverAdminMiddleware,
  ClientController.ClientGetById
);

router.get(
  "/clients",
  authMiddleWare,
  serverAdminMiddleware,
  ClientController.ClientGetAll
);

router.put(
  "/update/:id",
  authMiddleWare,
  serverAdminMiddleware,
  ClientController.ClientUpdate
);

router.delete(
  "/delete/:id",
  authMiddleWare,
  serverAdminMiddleware,
  ClientController.ClientDelete
);

router.get(
  "/client/:id",
  authMiddleWare,
  serverAdminMiddleware,
  ClientController.ClientGetById
);
router.get(
  "/all",
  authMiddleWare,
  serverAdminMiddleware,
  ClientController.ClientGetAll
);

export { router as clientRouter };
