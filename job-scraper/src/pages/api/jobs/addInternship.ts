// pages/api/addInternship.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb'; // Adjust the import path according to your project structure

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { titleI, companyI, descriptionI, requirementsI, locationI, date, status, userId } = req.body;

    try {
      const newInternship = await prisma.internship.create({
        data: {
          titleI,
          companyI,
          descriptionI,
          requirementsI,
          locationI,
          postedDateI: new Date(date),
          status,
          userId,
        },
      });
      res.status(200).json(newInternship);
    } catch (error) {
      console.error("Failed to add Internship", error);
      res.status(500).json({ error: "Failed to add Internship" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
