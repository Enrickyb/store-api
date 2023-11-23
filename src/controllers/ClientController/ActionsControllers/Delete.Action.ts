import { Prisma } from "../../../providers/prismaProvider";

export const clientDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const clientExists = await Prisma.clients.findUnique({
      where: {
        id: id,
      },
    });

    if (!clientExists) {
      return res.status(400).json({ message: "Client not exists" });
    }

    const client = await Prisma.clients.delete({
      where: {
        id: id,
      },
    });

    return res.status(200).json(client);
  } catch (error) {
    return res.status(500).json({ "Erro ao deletar cliente: ": error });
  }
};
