import { Prisma } from "../../../../providers/prismaProvider";
import { RemoveCreditMethod } from "../../WalletMethod/RemoveCredit.Method";
export const removeCredit = async (req, res) => {
  const { id } = req.params;
  const { credit } = req.body;

  try {
    const clientWallet = await Prisma.wallet_client.findUnique({
      where: {
        id,
      },
    });

    if (!clientWallet) {
      return res.status(404).json({
        message: "Client wallet not found",
      });
    }

    if (Number(credit) < 0) {
      return res.status(400).json({
        message: "The credit value is less than 0",
      });
    }

    if (Number(clientWallet.balance - Number(credit)) < 0) {
      return res.status(400).json({
        message: "The client don't have enough credit to remove",
        credits_remaining: clientWallet.balance,
      });
    }

    await RemoveCreditMethod(id, Number(clientWallet.balance), Number(credit));

    await Prisma.wallet_transactions.create({
      data: {
        type: 1,
        by_server: true,
        value: Number(credit),
        wallet_destination: id,
      },
    });

    return res.status(200).json({
      message: "Credit removed successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
