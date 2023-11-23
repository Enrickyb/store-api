import { Prisma } from "../../../providers/prismaProvider";
import { getWalletById } from "./ActionsController/GetById.Action";
import { addCredit } from "./ActionsController/AddCredit.Action";
import { getAllWallets } from "./ActionsController/GetAll.Action";
import { removeCredit } from "./ActionsController/RemoveCredit.Action";
import { transferCredit } from "./ActionsController/TransferCredit.Action";
import { TransferCreditRoutine } from "./ActionsController/RoutineController/TransferCreditRoutine";
import { AddCreditRoutine } from "./ActionsController/RoutineController/AddCreditRoutine";

export const ClientWalletController = {
  AddCredit: (req, res) => {
    addCredit(req, res);
  },

  RemoveCredit: (req, res) => {
    removeCredit(req, res);
  },

  TransferCredit: (req, res) => {
    transferCredit(req, res);
  },

  GetWalletById: (req, res) => {
    getWalletById(req, res);
  },

  GetAllWallets: (req, res) => {
    getAllWallets(req, res);
  },

  creditRoutine: async () => {
    await AddCreditRoutine();
    await TransferCreditRoutine();
  },
};
