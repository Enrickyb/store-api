import { Prisma } from "../../../providers/prismaProvider";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Prisma.orders.findMany({
      select: {
        id: true,
        status: true,
        value: true,
        modify_text: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        clients: {
          select: {
            id: true,
            name: true,
          },
        },
        order_items: {
          select: {
            id: true,
            products: {
              select: {
                id: true,
                name: true,
                value: true,
                value_logo: true,
                value_modify: true,
              },
            },
            value: true,
            with_logo: true,
            with_modify: true,
            value_logo: true,
            value_modify: true,
            value_final: true,
          },
        },
      },
    });

    return res.status(200).json(orders);
  } catch (err) {
    res.status(401).send(err);
  }
};
