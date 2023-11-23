import { clientCreate } from "./ActionsControllers/Create.Action";
import { clientDelete } from "./ActionsControllers/Delete.Action";
import { clientGetById } from "./ActionsControllers/GetById.Action";
import { clientGetAll } from "./ActionsControllers/GetAll.Action";
import { clientUpdate } from "./ActionsControllers/Update.Action";

export const ClientController = {
  ClientCreate: (req, res) => {
    clientCreate(req, res);
  },

  ClientUpdate: (req, res) => {
    clientUpdate(req, res);
  },

  ClientDelete: (req, res) => {
    clientDelete(req, res);
  },

  ClientGetById: (req, res) => {
    clientGetById(req, res);
  },

  ClientGetAll: (req, res) => {
    clientGetAll(req, res);
  },
};
