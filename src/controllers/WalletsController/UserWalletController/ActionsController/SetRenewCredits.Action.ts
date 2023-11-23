import { Prisma } from "../../../../providers/prismaProvider";

export const setRenewCredit = async (req, res) => {
  const { id } = req.params;
  const { renew } = req.body;

  try {
    const walletexists = await Prisma.wallet.findUnique({
      where: {
        id: id,
      },
    });

    if (!walletexists) {
      return res.status(404).json({
        message: "Wallet not found",
      });
    }

    const userWallet = await Prisma.wallet.update({
      where: {
        id: id,
      },
      data: {
        renew_credits: parseInt(renew),
      },
    });

    res.status(200).json({
      message: "Renew credit set successfully",
      userWallet,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error setting renew credit",
      error,
    });
  }
};
