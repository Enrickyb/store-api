import { Prisma } from "../../../providers/prismaProvider"

export const UpdateOrder = async (req, res) =>{
    const { id, status, } = req.params as {id: string, status: string}

    try{

        const order = await Prisma.orders.update({
            where:{
                id
            },
            data:{
                status,
            }
        })

    }catch(err){

    }
}