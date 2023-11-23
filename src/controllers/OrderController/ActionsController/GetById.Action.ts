import { Prisma } from "../../../providers/prismaProvider";

export const getOrderById = async (req, res) => {
  const { order_id } = req.params as { order_id: string };

  try {
    const order = await Prisma.orders.findUnique({
      where: {
        id: order_id,
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

    return res.status(200).json(order);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
