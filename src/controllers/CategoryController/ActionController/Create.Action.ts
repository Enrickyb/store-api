import { Prisma } from "../../../providers/prismaProvider";
import { CategoryType } from "../CategoryType";

export const CategoryCreate = async (req, res) => {
  const { name } = req.body as CategoryType;

  try {
    //verify if category already exists

    const categoryExists = await Prisma.category.findUnique({
      where: {
        name,
      },
    });

    if (categoryExists) {
      return res.status(400).json({ error: "Category already exists" });
    }

    const category = await Prisma.category.create({
      data: {
        name,
      },
    });

    return res.status(200).json({ category });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
