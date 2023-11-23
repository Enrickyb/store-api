import { Prisma } from "../../../providers/prismaProvider";
import { ClientType } from "../ClientType";

export const clientCreate = async (req, res) => {
  const { name, logo_url } = req.body as ClientType;

  try {
    const clientExists = await Prisma.clients.findUnique({
      where: {
        name,
      },
    });

    if (clientExists) {
      return res.status(400).json({ message: "Client already exists" });
    }

    const wallet_client = await Prisma.wallet_client.create({
      data: {
        balance: 1000,
      },
    });

    const client = await Prisma.clients.create({
      data: {
        name,
        logo_url,
        wallet_client_id: wallet_client.id,
      },
    });

    return res.status(201).json(client);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
