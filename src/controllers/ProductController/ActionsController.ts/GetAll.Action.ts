import { Prisma } from "../../../providers/prismaProvider";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Prisma.products.findMany({
      include: {
        category: true,
      },
    });

    return res.status(200).json({ products });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
