import { Router } from "express";
import { UserController } from "../controllers/UserController/UserController";
import { authMiddleWare } from "../middlewares/userMiddlerwares/authMiddleWare";
import { clientAdminMiddleware } from "../middlewares/userMiddlerwares/clientAdminMIddleWare";
import { serverAdminMiddleware } from "../middlewares/userMiddlerwares/serverAdminMIddleWare";

const router = Router();

/**
 * @openapi
 * /create:
 *   post:
 *     tags:
 *       - Create
 *     summary: Cria um novo usuário
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro ao criar usuário
 *       401:
 *         description: Não autorizado
 */
router.post("/create", UserController.UserCreate);

/**
 * @openapi
 * /create_admin:
 *   post:
 *     tags:
 *       - Create
 *     summary: Cria um novo administrador do cliente
 *     responses:
 *       201:
 *         description: Administrador do cliente criado com sucesso
 *       400:
 *         description: Erro ao criar administrador do cliente
 *       401:
 *         description: Não autorizado
 */
router.post(
  "/create_admin",
  authMiddleWare,
  serverAdminMiddleware,
  UserController.CreateClientAdmin
);

/**
 * @openapi
 * /login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Faz login do usuário
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login", UserController.UserLogin);

/**
 * @openapi
 * /client/{client_id}/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Obtém todos os usuários de um cliente específico
 *     parameters:
 *       - name: client_id
 *         in: path
 *         required: true
 *         description: ID do cliente
 *     responses:
 *       200:
 *         description: Lista de usuários do cliente
 *       401:
 *         description: Não autorizado
 *       403:
 *         description: Acesso negado
 */
router.get(
  "/client/:client_id",
  authMiddleWare,
  clientAdminMiddleware,
  UserController.getUsersByClientId
);
router.get(
  "/user/:id",
  authMiddleWare,
  serverAdminMiddleware,
  UserController.getUserById
);
router.get(
  "/users",
  authMiddleWare,
  serverAdminMiddleware,
  UserController.getAllUsers
);
router.put(
  "/update/:id",
  authMiddleWare,
  serverAdminMiddleware,
  UserController.UserUpdate
);
router.put(
  "/update/:id",
  authMiddleWare,
  serverAdminMiddleware,
  UserController.UserUpdate
);
router.delete(
  "/delete/:id",
  authMiddleWare,
  serverAdminMiddleware,
  UserController.UserDelete
);

router.get(
  "/client/:client_id",
  authMiddleWare,
  clientAdminMiddleware,
  UserController.getUsersByClientId
);
router.get(
  "/user/:id",
  authMiddleWare,
  serverAdminMiddleware,
  UserController.getUserById
);
router.get(
  "/all",
  // authMiddleWare,
  // serverAdminMiddleware,
  UserController.getAllUsers
);
router.put(
  "/client_admin/:id",
  authMiddleWare,
  serverAdminMiddleware,
  UserController.setClientAdmin
);

export { router as userRouter };
