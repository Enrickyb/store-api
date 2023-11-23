import { Prisma } from "../../../providers/prismaProvider";

export const getOrdersByUserId = async (req, res) => {
  const { user_id } = req.params as { user_id: string };

  try {
    const orders = await Prisma.orders.findMany({
      where: {
        user_id,
      },
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

    return res.status(200).send(orders);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};
