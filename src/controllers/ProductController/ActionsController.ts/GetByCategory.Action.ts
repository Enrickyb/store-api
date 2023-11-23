import { Prisma } from "../../../providers/prismaProvider";

export const getByCategory = async (req, res) => {
  const { category_id } = req.params;

  try {
    const products = await Prisma.products.findMany({
      where: {
        category_id,
      },
      include: {
        category: true,
      },
    });

    return res.status(200).json({ products });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
