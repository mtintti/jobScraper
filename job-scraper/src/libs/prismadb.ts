import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV != 'production') globalThis.prisma = client;


if (process.env.NODE_ENV === 'development') {
    global.prisma = prisma;
  }

export default client;