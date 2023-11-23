import { Prisma } from "../../../providers/prismaProvider";

export const getUsersByClientId = async (req, res) => {
  const { client_id } = req.params;

  try {
    const users = await Prisma.user.findMany({
      where: {
        client_id: client_id,
      },
    });

    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};
