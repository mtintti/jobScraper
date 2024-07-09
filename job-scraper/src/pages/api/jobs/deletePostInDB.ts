
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb'; 

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { id, status } = req.body;

  try {
    // Try deleting the Job
    const jobExists = await prisma.job.findUnique({ where: { id } });
    if (jobExists) {
      const deletedJob = await prisma.job.delete({
        where: { id },
      });
      res.status(200).json(deletedJob);
      return;
    }

    // Try deleting the Internship
    const internshipExists = await prisma.internship.findUnique({ where: { id } });
    if (internshipExists) {
      const deletedInternship = await prisma.internship.delete({
        where: { id },
      });
      res.status(200).json(deletedInternship);
      return;
    }

    res.status(404).json({ error: 'Record to update not found.' });
  } catch (error) {
    console.error('Failed to update post status', error);
    res.status(500).json({ error: 'Failed to update post status' });
  }
}
