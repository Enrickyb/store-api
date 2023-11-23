import { Prisma } from "../../../providers/prismaProvider";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        client_id: true,
        admin: true,
      },
    });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const token = jwt.sign(
          {
            id: user.id,
            name: user.name,
            email: user.email,
            client_id: user.client_id,
            admin: user.admin,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1d",
          }
        );
        res.status(200).json({
          message: "User logged in",
          token: token,
        });
      } else {
        res.status(401).json({
          message: "Invalid credentials",
        });
      }
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};
