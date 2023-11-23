import { Prisma } from "../../../../providers/prismaProvider";
import { AddCreditMethod } from "../../WalletMethod/AddCredit.Method";
export const addCredit = async (req, res) => {
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
    
    await AddCreditMethod(id, Number(clientWallet.balance), Number(credit));

    await Prisma.wallet_transactions
      .create({
        data: {
          value: Number(credit),
          type: 0,
          by_server: true,
          wallet_destination: id,
        },
      })
      .catch((err) => {
        console.log(err);
        res.send(err, "error on save transactions in history");
      });

    return res.status(200).json({
      message: "Credit added successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
