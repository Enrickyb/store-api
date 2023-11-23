import { userCreate } from "./ActionsControllers/Create.Action";
import { getUsersByClientId } from "./ActionsControllers/GetByClient.Action";
import { getUserById } from "./ActionsControllers/GetById.Action";
import { getAllUsers } from "./ActionsControllers/GetAll.Action";
import { userLogin } from "./ActionsControllers/Login.Action";
import { userUpdate } from "./ActionsControllers/Update.Action";
import { userDelete } from "./ActionsControllers/Delete.Action";
import { setClientAdmin } from "./ActionsControllers/SetClientAdmin.Action";
export const UserController = {
  UserCreate: (req, res) => {
    userCreate(req, res);
  },

  UserLogin: (req, res) => {
    userLogin(req, res);
  },

  getAllUsers: (req, res) => {
    getAllUsers(req, res);
  },

  getUsersByClientId: (req, res) => {
    getUsersByClientId(req, res);
  },

  getUserById: (req, res) => {
    getUserById(req, res);
  },

  UserUpdate: (req, res) => {
    userUpdate(req, res);
  },

  UserDelete: (req, res) => {
    userDelete(req, res);
  },

  setClientAdmin: (req, res) => {
    setClientAdmin(req, res);
  },

  CreateClientAdmin: (req, res) => {
    userCreate(req, res);
  },
};
