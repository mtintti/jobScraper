import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function hander(
    req:NextApiRequest,
    res:NextApiResponse
) {
    if (req.method != 'GET') {
        return res.status(405).end();
    }
    try {
        const { userId }= req.query;
        if(!userId || typeof userId != "string") {
            throw new Error("Invalid ID");
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        return res.status(200).json({ ...existingUser})


    } catch (error){
        console.log(error);
        return res.status(400).end();
    }

}


