import { Prisma } from "../../../providers/prismaProvider";
import fs from "fs";

export const deleteProduct = async (req, res) => {
  const { product_id } = req.params;

  try {
    const product = await Prisma.products.findFirst({
      where: {
        id: product_id,
      },
    });

    if (!product) {
      return res.status(400).json({ error: "Product not found" });
    }

    if (product.file) {
      fs.unlinkSync("uploads/" + product.file);
    }
    if (product.thumbnail) {
      fs.unlinkSync("uploads/" + product.thumbnail);
    }

    await Prisma.products.delete({
      where: {
        id: product_id,
      },
    });

    return res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
