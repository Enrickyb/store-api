import { Prisma } from "../../../providers/prismaProvider";

export const getAllCategories = async (req: any, res: any) => {
  try {
    const categories = await Prisma.category.findMany();

    return res.status(200).json({ categories });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
