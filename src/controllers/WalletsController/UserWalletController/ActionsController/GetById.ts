import { Prisma } from "../../../../providers/prismaProvider";

export const getUserWalletById = async (req, res) => {

    const { id } = req.params;
    
    try {
        const wallet = await Prisma.wallet.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            balance: true,
            renew_credits: true,
            user: {
            select: {
                id: true,
                name: true,
                email: true,
                clients: {
                select: {
                    id: true,
                    name: true,
                },
                },
            },
            },
        },
        });
    
        if (!wallet) {
        res.status(404).json({
            message: "Wallet not found",
        });
        }
    
        res.status(200).json({
        message: "Wallet found",
        wallet: wallet,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
        message: "Internal server error",
        error: error,
        });
    }


}
