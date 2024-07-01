// pages/api/addJob.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb'; // Adjust the import path according to your project structure

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { jobTitle, company, description, requirements, location, date, status, isJob, userId } = req.body;

    try {
      const newJob = await prisma.job.create({
        data: {
          jobTitle,
          company,
          description,
          requirements,
          location,
          postedDate: new Date(date),
          status,
          userId,
        },
      });
      res.status(200).json(newJob);
    } catch (error) {
      console.error("Failed to add job", error);
      res.status(500).json({ error: "Failed to add job" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
