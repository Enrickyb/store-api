import { Prisma } from "../../../providers/prismaProvider";

export const TransferCredit = async (
  wallet_from: string,
  wallet_destination: string,
  value: number
) => {
  await Prisma.wallet_client.update({
    where: {
      id: wallet_from,
    },
    data: {
      balance: {
        decrement: Number(value),
      },
    },
  });

  await Prisma.wallet.update({
    where: {
      id: wallet_destination,
    },
    data: {
      balance: {
        increment: Number(value),
      },
    },
  });
};
