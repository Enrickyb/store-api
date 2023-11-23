import { verify } from "jsonwebtoken";
import { Prisma } from "../../providers/prismaProvider";

export const serverAdminMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const data = verify(token, process.env.JWT_SECRET);

    const { id } = data as { id: string };

    const user = await Prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    if (user.admin === 0 || user.admin === 1) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    req.user = user;

    return next();
  } catch {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};
