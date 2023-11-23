import { Prisma } from "../../../../providers/prismaProvider";

export const getAllWallets = async (req, res) => {
  try {
    const wallets = await Prisma.wallet.findMany({
      select: {
        id: true,
        balance: true,
        renew_credits: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            clients: {
              select: {
                id: true,
                name: true,
              },
            },
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
