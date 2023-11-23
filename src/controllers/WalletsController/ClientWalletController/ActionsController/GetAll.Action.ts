import { Prisma } from "../../../../providers/prismaProvider";

export const getAllWallets = async (req, res) => {
  try {
    const wallets = await Prisma.wallet_client.findMany({
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

    if (!wallets) {
      res.status(404).json({
        message: "Wallets not found",
      });
    }

    res.status(200).json({
      message: "Wallets found",
      wallets: wallets,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};
