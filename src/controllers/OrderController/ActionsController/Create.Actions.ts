import { Prisma } from "../../../providers/prismaProvider";
import { v4 as uuid } from "uuid";

export const createOrder = async (req: any, res: any) => {
  const { user_id, products_ids, modify_text, with_logo, with_modify } =
    req.body;

  const user = await Prisma.user.findUnique({
    where: {
      id: user_id,
    },
  });

  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }

  const products = await Prisma.products.findMany({
    where: {
      id: {
        in: products_ids,
      },
    },
  });

  try {
    const order = await Prisma.orders.create({
      data: {
        user_id: user_id,
        clients_id: user.client_id,
        status: "pending",
        modify_text,
        order_items: {
          createMany: {
            data: products.map((product) => {
              const id: string = uuid();
              return {
                id,
                products_id: product.id,
                value: product.value,
                with_logo: Boolean(with_logo),
                with_modify: Boolean(with_modify),
                value_logo: product.value_logo,
                value_modify: product.value_modify,
                value_final: with_logo
                  ? product.value_logo + product.value_modify
                  : product.value + product.value_modify,
              };
            }),
          },
        },
        value: products.reduce((acc: number, product) => {
          return (
            acc + product.value + product.value_logo + product.value_modify
          );
        }, 0),
      },
    });

    return res.status(200).json({ order });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
