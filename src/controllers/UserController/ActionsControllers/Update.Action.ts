import { Prisma } from "../../../providers/prismaProvider";

export const userUpdate = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, client_id } = req.body;
    
    try {
        const user = await Prisma.user.update({
        where: {
            id: id,
        },
        data: {
            name: name,
            email: email,
            password: password,
            client_id: client_id,
        },
        });
    
        if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
        }
    
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
}