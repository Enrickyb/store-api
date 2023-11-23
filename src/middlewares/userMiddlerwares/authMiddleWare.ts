import { Prisma } from "../../providers/prismaProvider";
import { verify } from "jsonwebtoken";

export const authMiddleWare = async (req, res, next) => {
  const { authorization }: { authorization: string } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).json({
        message: "Unauthorized, no token provided",
      });
    }

    if (!authorization.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Unauthorized, no token provided with Bearer",
      });
    }

    const token = authorization.replace("Bearer ", "");

    const data = verify(token, process.env.JWT_SECRET);

    const { id } = data as { id: string };

    const user = await Prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Unauthorized, user not found",
      });
    }

    req.user = user;

    return next();
  } catch (err) {
    return res.status(401).json(err.message, {
      message: "Unauthorized, faild to verify token",
    });
  }
};
