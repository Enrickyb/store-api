import { Prisma } from "../../../providers/prismaProvider";
import { ClientType } from "../ClientType";

export const clientUpdate = async (req, res) => {
  const { name, logo_url } = req.body as ClientType;
  try {
    const client = await Prisma.clients.update({
      where: {
        id: req.params.id,
      },
      data: {
        name,
        logo_url,
      },
    });

    return res.status(200).json(client);
  } catch (error) {
    return res.status(500).json(error);
  }
};
