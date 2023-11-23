import { Prisma } from "../../../providers/prismaProvider";

export const AddCreditMethod = async (
  id: string,
  balance: number,
  credit: number
) => {
  await Prisma.wallet_client.update({
    where: {
      id,
    },
    data: {
      balance: {
        increment: Number(credit),
      },
    },
  });
};
