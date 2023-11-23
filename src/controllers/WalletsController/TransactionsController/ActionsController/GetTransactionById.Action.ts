import { Prisma } from "../../../../providers/prismaProvider";

export const getTransactionById = async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await Prisma.wallet_transactions.findUnique({
      where: {
        id,
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
