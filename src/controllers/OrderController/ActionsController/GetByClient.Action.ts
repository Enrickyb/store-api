import { Prisma } from "../../../providers/prismaProvider"

export const getOrderByClientId = async (req, res) =>{
    const { client_id } = req.params as {client_id: string}

    try{
        
        const orders = await Prisma.orders.findMany({
            where:{
                clients_id: client_id,
            }            
        })

        return res.status(200).send(orders)

    }catch(err){
        return res.status(400).send(err.message)
    }
}