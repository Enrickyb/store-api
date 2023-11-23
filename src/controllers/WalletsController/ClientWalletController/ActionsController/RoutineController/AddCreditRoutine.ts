import { MailTrap } from "../../../../../providers/mailProvider";
import { Prisma } from "../../../../../providers/prismaProvider";

export const AddCreditRoutine = async () => {
  try {
    const wallets = await Prisma.wallet_client.findMany({
      select: {
        id: true,
        balance: true,
        clients: {
          select: {
            id: true,
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    wallets.map(async (wallet) => {
      await Prisma.wallet_client.update({
        where: {
          id: wallet.id,
        },
        data: {
          balance: 1000,
        },
      });

      await Prisma.wallet_transactions.create({
        data: {
          value: 1000,
          wallet_destination: wallet.id,
          by_server: true,
          type: 3,
        },
      });

      const menssage = {
        to: wallet.clients[0].user[0].email,
        from: "atendimento@midastudio.com.br",
        subject: "Credito mensal renovado!!",
        html: `<h1>Olá, ${wallet.clients[0].user[0].name}</h1>
        <p>Seu credito mensal foi renovado com sucesso!</p>
        <p>Seu novo saldo é de: R$${wallet.balance}</p>
        <p>Atenciosamente, Equipe Midas</p>`,
      };

      await MailTrap(menssage);
    });
  } catch (err) {
    [console.log(err)];
  }
};
