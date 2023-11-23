import { Prisma } from "../../../providers/prismaProvider";

export const getAllUsers = async (req, res) => {
  try {
    const users = await Prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        client_id: true,
        admin: true,
        wallet_id: true,
        clients: {
          select: {
            id: true,
            name: true,
            logo_url: true,
          },
        },
      },
    });

    if (!users) {
      res.status(404).json({
        message: "Users not found",
      });
    }

    res.status(200).json({
      message: "Users found",
      users: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};
