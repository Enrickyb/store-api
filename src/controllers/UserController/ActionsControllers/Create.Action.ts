import { Prisma } from "../../../providers/prismaProvider";
import { UserType } from "../UserType";
import bcrypt from "bcrypt";

export const userCreate = async (req, res) => {
  const { name, email, password, client_id } = req.body as UserType;

  try {
    const userExists = await Prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const client = await Prisma.clients.findUnique({
      where: {
        id: client_id,
      },
    });

    if (!client) {
      return res.status(400).json({ error: "Client not found" });
    }

    const wallet = await Prisma.wallet.create({
      data: {
        balance: 0,
      },
    });

    const passwordHash = await bcrypt.hash(password, 8);

    const user = await Prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        client_id: client_id,
        admin: 0,
        wallet_id: wallet.id,
      },
    });

    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
