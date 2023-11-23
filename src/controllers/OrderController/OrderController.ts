import { createOrder } from "./ActionsController/Create.Actions";
import { deleteOrder } from "./ActionsController/Delete.Actions";
import { getAllOrders } from "./ActionsController/GetAll.Action";
import { getOrderByClientId } from "./ActionsController/GetByClient.Action";
import { getOrderById } from "./ActionsController/GetById.Action";
import { getOrdersByUserId } from "./ActionsController/GetByUser.Action";
import { UpdateOrder } from "./ActionsController/Update.Action";

export const OrderController = {
  CreateOrder: (req, res) => {
    createOrder(req, res);
  },
  
  DeleteOrder: (req, res)=>{
    deleteOrder(req, res)
  },

  GetAllOrders: (req, res) => {
    getAllOrders(req, res);
  },

  GetOrderById: (req, res) => {
    getOrderById(req, res);
  },

  GetOrderByUserId: (req, res) => {
    getOrdersByUserId(req, res);
  },

  GetOrderByClientId: (req, res) =>{
    getOrderByClientId(req, res);
  },

  UpdateOrder: (req, res) => {
    UpdateOrder(req, res);
  },

  

  
};
