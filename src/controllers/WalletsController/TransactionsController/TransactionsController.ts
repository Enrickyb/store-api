import { getAllTransactions } from "./ActionsController/GetAllTransactions.Action";
import { getTransactionById } from "./ActionsController/GetTransactionById.Action";
import { getTransactionsFromServer } from "./ActionsController/GetTransactionFromServer.Action";
import { getTransactionsByClient } from "./ActionsController/GetTransactionsByClient.Action";
import { getTransactionsByDate } from "./ActionsController/GetTransactionsByDate.Action";
import { getTransactionsByStatus } from "./ActionsController/GetTransactionsByStatus.Action";
import { getTransactionsByType } from "./ActionsController/GetTransactionsByType.Action";
import { getTransactionsByValue } from "./ActionsController/GetTransactionsByValue.Action";

export const TransactionsController = {
  GetAllTransactions: async (req, res) => {
    getAllTransactions(req, res);
  },

  GetTransactionById: async (req, res) => {
    getTransactionById(req, res);
  },

  GetTransactionByWalletId: async (req, res) => {},

  GetTransactionByClient: async (req, res) => {
    getTransactionsByClient(req, res);
  },
  GetTransactionFromServer: async (req, res) => {
    getTransactionsFromServer(req, res);
  },

  GetTransactionByDate: async (req, res) => {
    getTransactionsByDate(req, res);
  },

  GetTransactionByType: async (req, res) => {
    getTransactionsByType(req, res);
  },

  GetTransactionByStatus: async (req, res) => {
    getTransactionsByStatus(req, res);
  },

  GetTransactionByValue: async (req, res) => {
    getTransactionsByValue(req, res);
  },

  GetTransactionByUser: async (req, res) => {
    
  },
};
