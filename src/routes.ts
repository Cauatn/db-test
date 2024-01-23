import { FastifyInstance,FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { request } from "http";
import { CreateCustumerController } from "./controllers/CreateCustumerController";

export async function routes (fastify: FastifyInstance, options: FastifyPluginOptions,) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true}  
    })

    fastify.post("/custumer",async (request:FastifyRequest, reply: FastifyReply) => {
        return new CreateCustumerController().handle(request,reply);
    })
}