// pages/api/getJobsGroupedByStatus.ts
/*import { NextApiRequest, NextApiResponse } from 'next';
import { getJobsGroupedByStatus } from '@/libs/getJobsGroupedByStatus'; // Adjust the import path according to your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const board = await getJobsGroupedByStatus();
    console.log('Fetched board data:', board);
    //console.log("Posts array data: ", id.posts.ArrayData);
    console.log("board is Map:",  board instanceof Map);
    console.log("board is Object:",  board instanceof Object);
    console.log("board data is a Array:", board instanceof Array);

    
    res.status(200).json(board);
  } catch (error) {
    console.error("Failed to fetch jobs", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
}
*/

import { NextApiRequest, NextApiResponse } from 'next';
import { getJobsGroupedByStatus } from '@/libs/getJobsGroupedByStatus'; // Adjust the import path according to your project structure
import serverAuth from '../serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { currentUser } = await serverAuth(req);

    if (!currentUser ) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    if (currentUser.id === '6686b07cdfa48c7c64bd2dc2'){
      console.log("User is guest, providing mock User data");
    }
    
    const board = await getJobsGroupedByStatus(currentUser.id);
    console.log('Fetched board data:', board);

    res.status(200).json(board);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
}
