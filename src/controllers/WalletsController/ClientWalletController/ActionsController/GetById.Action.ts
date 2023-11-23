import { Prisma } from "../../../../providers/prismaProvider";

export const getWalletById = async (req, res) => {
  try {
    const wallet = await Prisma.wallet_client.findUnique({
      where: {
        id: req.params.id,
      },
      select: {
        id: true,
        balance: true,
        clients: {
          select: {
            id: true,
            name: true,
            logo_url: true,
          },
        },
      },
    });

    if (!wallet) {
      res.status(404).json({
        message: "Wallet not found",
      });
    }

    res.status(200).json({
      message: "Wallet found",
      wallet: wallet,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};
