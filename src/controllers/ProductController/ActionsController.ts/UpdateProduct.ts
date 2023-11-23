import { Prisma } from "../../../providers/prismaProvider";

export const updateProduct = async (req, res) => {
  const { product_id } = req.params;

  const { name, description, value, category_id } = req.body;

  try {
    const product = await Prisma.products.findFirst({
      where: {
        id: product_id,
      },
    });

    if (!product) {
      return res.status(400).json({ error: "Product not found" });
    }

    await Prisma.products.update({
      where: {
        id: product_id,
      },
      data: {
        name,
        description,
        value,
        category_id,
      },
    });

    return res.status(200).json({ message: "Product updated" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
