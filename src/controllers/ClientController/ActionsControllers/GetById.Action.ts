import { Prisma } from "../../../providers/prismaProvider";

export const clientGetById = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Prisma.clients.findUnique({
      where: {
        id: id,
      },
    });

    return res.status(200).json(client);
  } catch (error) {
    return res.status(500).json(error);
  }
};
