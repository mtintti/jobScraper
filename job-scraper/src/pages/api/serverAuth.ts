import { NextApiRequest} from "next";
import { getSession } from "next-auth/react";
import prisma from '@/libs/prismadb';

const serverAuth = async(req: NextApiRequest ) => {
    const session = await getSession({req});
    console.log("ServerAuth request sent");

    if(!session?.user?.email) {
        console.log("No user session found, defining as guest");
        return { status: 200, currentUser:{id: '6686b07cdfa48c7c64bd2dc2', username: 'guestAcc',
            email:'guest',hashedPassword: null, 
            createdAt: new Date()}};
    }
    
    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    if(!currentUser) {
        console.log("User not found in database");
        return { status: 404, message: 'User not found' };
    }

    return { status: 200, currentUser };

};

export default serverAuth;
