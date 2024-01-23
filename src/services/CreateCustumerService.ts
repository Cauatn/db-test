import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";

interface CreatecustumerProps {
    name: string;
    email: string;
    instituition: string;
}

class CreateCustumerService {
    async execute({name,email,instituition}: CreatecustumerProps) {
        console.log("ROTA FOI CHAMADA")

        if(!name || !email) {
            throw new Error("Preencha todos os campos")
        }

        const custumer = await prismaClient.custumer.create({
            data: {
                name,
                email,
                instituition,
                status : true
            }
        })

        return custumer
    }
}

export {CreateCustumerService}