import { Request, Response } from "express";
import { Prisma } from "../../../../providers/prismaProvider";

export const getTransactionsByClient = async (req: Request<{client_id: string}> , res) => {
  const { client_id } = req.params;

  try {

    const client = await Prisma.clients.findUnique({
      where: {
        id: client_id,
      },
    });

    if (!client) {
      return res.status(404).json({
        message: "Client not found",
      });
    }

    const transactions = await Prisma.wallet_transactions.findMany({
      where: {
        wallet_client: {
          id: client_id,
        },
      },
      select: {
        id: true,
        type: true,
        value: true,
        wallet_client: {
          select: {
            id: true,
            balance: true,
          },
        },
        wallet_destination: true,
        by_server: true,
        created_at: true,
      },
    });

    if (!transactions) {
      return res.status(404).json({
        message: "Transactions not found",
      });
    }

    return res.status(200).json({
      message: "Transactions found successfully",
      transactions,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
