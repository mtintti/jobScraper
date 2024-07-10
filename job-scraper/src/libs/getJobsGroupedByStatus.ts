
import prisma from '@/libs/prismadb';
import { Status } from '@prisma/client'; 

interface Post {
  id: string;
  title: string;
  company: string;
  description: string | null;
  requirements: string | null;
  location: string;
  postedDate: Date;
  status: Status; 
  userId: string;
}

interface Column {
  id: Status; 
  posts: Post[];
}

interface Board {
  columns: Array<[Status, Column]>;  
}

export const getJobsGroupedByStatus = async (userId: string): Promise<Board> => {
 
  // Haetaan jobs käyttäjän id:llä tietokannasta.
  const jobs = await prisma.job.findMany({
    where: {
      userId: userId 
    }
  });

  // Haetaan internships käyttäjän id:llä tietokannasta.
  const internships = await prisma.internship.findMany({
    where: {
      userId: userId
    }
  });

  const columns = new Map<Status, Column>();

  // Iteroidaan työpostaukset läpi ja lisätään ne oikeaan columiin Statuksella. 
  // Jos oikeaa statusta ei löydy, luodaan se. 
  jobs.forEach(job => {
    const jobPost: Post = {
      id: job.id,
      title: job.jobTitle,
      company: job.company,
      description: job.description,
      requirements: job.requirements,
      location: job.location,
      postedDate: job.postedDate,
      status: job.status as Status,
      userId: job.userId
    };

    if (!columns.has(job.status)) {
      columns.set(job.status, {
        id: job.status,
        posts: []
      });
    }
    // Lopuksi lisätään job postaus oikeaan columniin
    columns.get(job.status)!.posts.push(jobPost);
  });


  internships.forEach(internship => {
    const internshipPost: Post = {
      id: internship.id,
      title: internship.titleI,
      company: internship.companyI,
      description: internship.descriptionI,
      requirements: internship.requirementsI,
      location: internship.locationI,
      postedDate: internship.postedDateI,
      status: internship.status as Status,
      userId: internship.userId
    };

    if (!columns.has(internship.status)) {
      columns.set(internship.status, {
        id: internship.status,
        posts: []
      });
    }
    columns.get(internship.status)!.posts.push(internshipPost);
  });

  const columnTypes: Status[] = [
    Status.Rejected,
    Status.Offer,
    Status.Applied,
    Status.Assessment,
    Status.Interview
  ];
  // Jokaisella column-tyypillä on vastaava merkintä column Mapissä.
  columnTypes.forEach(columnType => {
    if (!columns.has(columnType)) {
      columns.set(columnType, {
        id: columnType,
        posts: []
      });
    }
  });
  // sortataan aakkosjärjestyksellä columnTypet
  const sortedColumns = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    )
  );

  return {
    columns: Array.from(sortedColumns.entries())
  };
};

