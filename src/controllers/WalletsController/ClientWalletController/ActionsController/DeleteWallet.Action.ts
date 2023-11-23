import { Prisma } from "../../../../providers/prismaProvider";

export const deleteWallet = async (req, res) => {

    const { id } = req.params;
    
    try {
        const clientWallet = await Prisma.wallet_client.findUnique({
        where: {
            id,
        },
        });
    
        if (!clientWallet) {
        return res.status(404).json({
            message: "Client wallet not found",
        });
        }
    
        await Prisma.wallet_client.delete({
        where: {
            id,
        },
        });
    
        return res.status(200).json({
        message: "Wallet deleted successfully",
        });
    } catch (err) {
        return res.status(500).json({
        message: "Internal server error",
        });
    }

}