import { Prisma } from "../../../providers/prismaProvider";

export const deleteOrder = async (req, res) =>{

    const { order_id } = req.params as {order_id: string}

    try{

        const orderExists = await Prisma.orders.findUnique({   
            where: {
                id: order_id
            }
        })

        if(!orderExists){
            return res.status(400).json("Order not found");
        }
        
        const order = await Prisma.orders.delete({
            where: {
                id: order_id
            }
        })

        return res.status(200).json("Order deleted successfully");

    }catch(err){
        res.status(401).send(err);
    }

}