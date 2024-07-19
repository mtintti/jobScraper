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
    if(currentUser && 'role' in currentUser) {
      console.log("is guest?, "+ currentUser.role);
      return res.status(200).json({ role: 'guest' });
    }
    return res.status(200).json(currentUser);

  } catch (error) {
    console.error(error);
    return res.status(400).end();
  }

}