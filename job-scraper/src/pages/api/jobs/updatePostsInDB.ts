/*import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb'; // Adjust the import path according to your project structure

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id, status } = req.body;

    try {
      const updatedPost = await prisma.job.update({
        where: { id },
        data: { status },
      });
      res.status(200).json(updatedPost);
    } catch (error) {
      console.error("Failed to update post status", error);
      res.status(500).json({ error: "Failed to update post status" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}*/


import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb'; 

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { id, status } = req.body;

  try {
    // Try updating the Job model
    const jobExists = await prisma.job.findUnique({ where: { id } });
    if (jobExists) {
      const updatedJob = await prisma.job.update({
        where: { id },
        data: { status, postedDate: new Date()},
        
      });
      res.status(200).json(updatedJob);
      return;
    }

    // Try updating the Internship model
    const internshipExists = await prisma.internship.findUnique({ where: { id } });
    if (internshipExists) {
      const updatedInternship = await prisma.internship.update({
        where: { id },
        data: { status, postedDateI: new Date() },
      });
      res.status(200).json(updatedInternship);
      return;
    }

    // If no record was found in either model
    res.status(404).json({ error: 'Record to update not found.' });
  } catch (error) {
    console.error('Failed to update post status', error);
    res.status(500).json({ error: 'Failed to update post status' });
  }
}
