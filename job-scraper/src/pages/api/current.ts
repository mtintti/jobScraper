import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "./serverAuth";
import useCurrentUser from '@/hooks/useCurrentUser';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (req.method != 'GET') {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req);
    return res.status(200).json(currentUser);

  } catch (error) {
    console.error(error);
    return res.status(400).end();
  }

}
// works with the upper part for login and logout

/*
    const session = await getSession({ req });

    if (req.method !== 'GET') {
        return res.status(405).end();
    }



    try {
        const { currentUser } = await serverAuth(req);
        return res.status(200).json(currentUser);
    } catch (error) {
        console.error(error);
        return res.status(400).end();
    }
}

*/

/* finally {
        if (!session) {
            return res.status(200).json({ user: null });
        }

    } */

/*     } catch (error) {
    console.log(error);
    return res.status(400).end();
} */



// new from chatgtp
/*
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const { userId } = req.query;

    console.log("Received userId:", userId);
    
    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID");
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(existingUser);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}*/
