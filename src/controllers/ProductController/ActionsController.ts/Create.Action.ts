import { Prisma } from "../../../providers/prismaProvider";
import { ProductType } from "../ProductType";
export const productCreate = async (req, res) => {
  const {
    name,
    description,
    active,
    value,
    value_logo,
    value_modify,
    category_id,
  } = req.body as ProductType;
  const files = req.files;

  try {
    if (!files) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const product = await Prisma.products.create({
      data: {
        name,
        description,
        file: files.file[0].filename,
        thumbnail: files.thumbnail[0].filename,
        active,
        value: Number(value),
        value_logo: Number(value_logo),
        value_modify: Number(value_modify),
        category_id: category_id,
      },
    });

    return res.status(200).json({ product });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
