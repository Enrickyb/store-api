import { Prisma } from "../../../providers/prismaProvider";

export const setClientAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { client_admin } = req.body;

    const userAlreadyExist = await Prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!userAlreadyExist) {
      return res.status(400).json({ error: "User not found" });
    }

    const user = await Prisma.user.update({
      where: {
        id: id,
      },
      data: {
        admin: Number(client_admin),
      },
    });

    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
