import { Prisma } from "../../../providers/prismaProvider";

export const deleteCategory = async (req, res) => {
  const { category_id } = req.params;

  try {
    const category = await Prisma.category.findFirst({
      where: {
        id: category_id,
      },
    });

    if (!category) {
      return res.status(400).json({ error: "Category not found" });
    }

    await Prisma.category.delete({
      where: {
        id: category_id,
      },
    });

    return res.status(200).json({ message: "Category deleted" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
