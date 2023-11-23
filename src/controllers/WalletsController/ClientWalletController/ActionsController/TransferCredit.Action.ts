import { Prisma } from "../../../../providers/prismaProvider";
import { TransferCredit } from "../../WalletMethod/TransferCredit.Method";

export const transferCredit = async (req, res) => {
  const { wallet_from, wallet_destination, amount } = req.body;

  try {
    const senderWallet = await Prisma.wallet_client.findUnique({
      where: {
        id: wallet_from,
      },
    });

    const receiverWallet = await Prisma.wallet.findUnique({
      where: {
        id: wallet_destination,
      },
    });

    if (!senderWallet) {
      return res.status(404).json({
        message: "Sender wallet not found",
      });
    }

    if (!receiverWallet) {
      return res.status(404).json({
        message: "Receiver wallet not found",
      });
    }

    if (senderWallet.balance < amount) {
      return res.status(400).json({
        message: "Insufficient funds",
      });
    }

    if (receiverWallet.balance + amount > receiverWallet.renew_credits) {
      return res.status(400).json({
        message: "The receiver don't have limit to receive this amount",
      });
    }

    TransferCredit(wallet_from, wallet_destination, amount)

    const transaction = await Prisma.wallet_transactions.create({
      data: {
        value: amount,
        type: 2,
        status: "success",
        by_server: false,
        wallet_from: wallet_from,
        wallet_destination: wallet_destination,
      },
    });

    return res.status(200).json({
      message: "Transfer successful",
      transaction,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
