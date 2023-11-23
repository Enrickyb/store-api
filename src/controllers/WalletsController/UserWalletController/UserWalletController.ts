import { getAllWallets } from "./ActionsController/GetAll.Action";
import { getUserWalletById } from "./ActionsController/GetById";
import { setRenewCredit } from "./ActionsController/SetRenewCredits.Action";

export const UserWalletController = {

  GetWalletById: async (req, res) => {
    getUserWalletById(req, res);
  },

  GetAllWallets: async (req, res) => {
    getAllWallets(req, res);
  },

  SetRenewCredit: async (req, res) => {
    setRenewCredit(req, res);
  },

  
};
