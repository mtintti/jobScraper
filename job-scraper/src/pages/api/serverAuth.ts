import { NextApiRequest} from "next";
import { getSession } from "next-auth/react";
import prisma from '@/libs/prismadb';

const serverAuth = async(req: NextApiRequest ) => {
    const session = await getSession({req});
    console.log("ServerAuth request sent");

    if(!session?.user?.email) {
    //if (!session || !session.user || !session.user.email || session.user.email !== typeof "string") {
        //throw new Error('Not signed in');
        console.log("No user session found, defining as guest");
        return { status: 200, currentUser:{role: 'guest'}};
    }

   /* const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    });*/
 
    /*if(!currentUser) {
        //throw new Error('Not signed in');
        console.log("user not signed in");
    }*/
    //return { currentUser };


    //return { status: 200, currentUser };

    
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


/*
// conceptual waiting on user sessoin.
import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prisma from '@/libs/prismadb';

// Counter to track retry attempts
let retryAttempts = 0;

const waitAndRetry = async (req: NextApiRequest) => {
    return new Promise<string>((resolve, reject) => {
        const interval = setInterval(async () => {
            retryAttempts++;
            const session = await getSession({ req });
            
            if (session?.user?.email) {
                clearInterval(interval);
                resolve(session.user.email as string); // Asserting session.user.email as string
            }
            
            // Max retry attempts (e.g., 5 times)
            if (retryAttempts > 1) {
                clearInterval(interval);
                reject(new Error('Max retry attempts reached'));
            }
        }, 5000); // Wait for 5 seconds between each retry attempt
    });
};

const serverAuth = async (req: NextApiRequest) => {
    try {
        const session = await getSession({ req });

        if (!session?.user?.email) {
            // Wait and retry logic
            const userEmail = await waitAndRetry(req);
            console.log("Current retry number, ", retryAttempts);
            console.log('User logged in:', userEmail);

            // Now fetch current user details
            const currentUser = await prisma.user.findUnique({
                where: {
                    email: userEmail
                }
            });

            if (!currentUser) {
                throw new Error('User not found');
            }

            return { currentUser };
        }

        // Fetch current user details if session exists
        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email
            }
        });

        if (!currentUser) {
            throw new Error('User not found');
        }

        return { currentUser };
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw new Error('Failed to authenticate user');
    }
};

export default serverAuth;
*/