import { Prisma } from "../../../providers/prismaProvider";

export const RemoveCreditMethod = async (
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
        decrement: Number(credit),
      }
    },
  });
};
