
// current
/*
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
}*/

// test to see how long does the api request take

import { NextApiRequest, NextApiResponse } from 'next';
import { getJobsGroupedByStatus } from '@/libs/getJobsGroupedByStatus'; // Adjust the import path according to your project structure
import serverAuth from '../serverAuth';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.time('totalHandlerTime');
  try {
    console.time('serverAuth');
    const { currentUser } = await serverAuth(req);
    console.timeEnd('serverAuth');
    console.time('getJobsGroupedByStatus');
    
    if (!currentUser) {
      console.timeEnd('getJobsGroupedByStatus');
      console.timeEnd('totalHandlerTime');
      return res.status(401).json({ error: "Unauthorized" });
    }
    if (currentUser.id === '6686b07cdfa48c7c64bd2dc2'){
      console.log("User is guest, providing mock User data");
    }
    
    console.time('fetchBoard');
    const board = await getJobsGroupedByStatus(currentUser.id);
    console.timeEnd('fetchBoard');
    console.log('Fetched board data:', board);

    console.timeEnd('getJobsGroupedByStatus');
    res.status(200).json(board);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
  console.timeEnd('totalHandlerTime');
}
