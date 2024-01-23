import { FastifyRequest,FastifyReply } from "fastify";

import { CreateCustumerService } from "../services/CreateCustumerService";

class CreateCustumerController {
    async handle(request:FastifyRequest,reply: FastifyReply){

        const {
            name,email, instituition,
        } = request.body as {name:string, email:string, instituition: string};

        console.log(name,email)

        const custumerService = new CreateCustumerService();

        const custumer = await custumerService.execute({name,email,instituition});

        reply.send(custumer)
    }
}

export {CreateCustumerController}