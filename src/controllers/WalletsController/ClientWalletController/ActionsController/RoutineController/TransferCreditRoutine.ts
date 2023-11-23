import { Prisma } from "../../../../../providers/prismaProvider";

export const TransferCreditRoutine = async () => {
  try {
    const userWallets = await Prisma.wallet.findMany({
      select: {
        id: true,
        balance: true,
        renew_credits: true,
        user: {
          select: {
            clients: {
              select: {
                id: true,
                wallet_client: {
                  select: {
                    id: true,
                    balance: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    userWallets.map(async (wallet) => {
      if (
        wallet.renew_credits <
        Number(wallet.user.map((user) => user.clients.wallet_client.balance))
      ) {
        await Prisma.wallet.update({
          where: {
            id: wallet.id,
          },
          data: {
            balance: wallet.renew_credits,
          },
        });

        await Prisma.wallet_client.update({
          where: {
            id: String(
              wallet.user.map((user) => user.clients.wallet_client.id)
            ),
          },
          data: {
            balance: Number(
              wallet.user.map(
                (user) =>
                  user.clients.wallet_client.balance - wallet.renew_credits
              )
            ),
          },
        });

        await Prisma.wallet_transactions.create({
          data: {
            value: wallet.renew_credits,
            wallet_destination: wallet.id,
            by_server: true,
            type: 3,
          },
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};
