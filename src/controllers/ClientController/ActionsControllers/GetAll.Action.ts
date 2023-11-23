import { Prisma } from "../../../providers/prismaProvider";

export const clientGetAll = async (req, res) => {
  try {
    const clients = await Prisma.clients.findMany();

    return res.status(200).json(clients);
  } catch (error) {
    return res.status(500).json(error);
  }
};
