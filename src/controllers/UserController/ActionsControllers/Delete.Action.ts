import { Prisma } from "../../../providers/prismaProvider";

export const userDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Prisma.user.delete({
      where: {
        id: id,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};
