import { Prisma } from "../../../../providers/prismaProvider";

export const getTransactionsByDate = async (req, res) => {
  const { date } = req.body;

  try {
    const transaction = await Prisma.wallet_transactions.findMany({
      where: {
        created_at: date,
      },
    });

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    return res.status(200).json({
      message: "Transaction found successfully",
      transaction,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
