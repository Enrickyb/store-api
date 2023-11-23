import { Prisma } from "../../../../providers/prismaProvider";

export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Prisma.wallet_transactions.findMany({
      select: {
        id: true,
        value: true,
        type: true,
        status: true,
        created_at: true,
        wallet_destination: true,
        wallet_from: true,
        by_server: true,
        user_id: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!transactions) {
      res.status(404).json({
        message: "Transactions not found",
      });
    }

    res.status(200).json({
      message: "Transactions found",
      transactions: transactions,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};
