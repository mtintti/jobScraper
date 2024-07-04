/*import prisma from '@/libs/prismadb';
import { Status } from '@prisma/client';

export const getJobsGroupedByStatus = async (): Promise<Board> => {
  const jobs = await prisma.job.findMany();
  const internships = await prisma.internship.findMany();

  const columns = new Map<Status, Column>();

  jobs.forEach(job => {
    const jobPost: Post = {
      id: job.id,
      title: job.jobTitle,
      company: job.company,
      description: job.description,
      requirements: job.requirements,
      location: job.location,
      postedDate: job.postedDate,
      status: job.status,
      userId: job.userId
    };

    if (!columns.has(job.status)) {
      columns.set(job.status, {
        id: job.status,
        posts: []
      });
    }
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
      status: internship.status,
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

  columnTypes.forEach(columnType => {
    if (!columns.has(columnType)) {
      columns.set(columnType, {
        id: columnType,
        posts: []
      });
    }
  });

  const sortedColumns = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    )
  );

  const board: Board = {
    columns: sortedColumns
  };

  return board;
};
*/


// getJobsGroupedByStatus.ts

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
 
  const jobs = await prisma.job.findMany({
    where: {
      userId: userId 
    }
  });

  const internships = await prisma.internship.findMany({
    where: {
      userId: userId
    }
  });

  const columns = new Map<Status, Column>();


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
    columns.get(job.status)!.posts.push(jobPost);
  });
  console.log('Offer Column Data:', columns.get('Offer'));
  console.log('Applied Column Data:', columns.get('Applied'));
  console.log('Columns is Object:', columns instanceof Object);
  console.log('Columns is Map:', columns instanceof Map);
  console.log('Columns is Array:', columns instanceof Array);




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

  columnTypes.forEach(columnType => {
    if (!columns.has(columnType)) {
      columns.set(columnType, {
        id: columnType,
        posts: []
      });
    }
  });

  const sortedColumns = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    )
  );

  return {
    columns: Array.from(sortedColumns.entries())
  };
};


