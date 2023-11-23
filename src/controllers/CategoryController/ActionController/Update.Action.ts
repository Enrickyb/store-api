import { Prisma } from "../../../providers/prismaProvider";

export const updateCategory = async (req: any, res: any) => {
  const { category_id } = req.params;
  const { name } = req.body;

  try {
    const category = await Prisma.category.findFirst({
      where: {
        id: category_id,
      },
    });

    if (!category) {
      return res.status(400).json({ error: "Category not found" });
    }

    await Prisma.category.update({
      where: {
        id: category_id,
      },
      data: {
        name,
      },
    });

    return res.status(200).json({ message: "Category updated" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
