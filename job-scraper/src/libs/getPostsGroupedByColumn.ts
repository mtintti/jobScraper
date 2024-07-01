/*import { Board, TypedColumn } from "../../typings";

// old code from tutorial
export const getPostsGroupedByColumn = async () => {
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_POSTS_COLLECTION_ID!
    );
    const Posts = data.documents;

    const columns = Posts.reduce((acc, Posts) => {
        if(!acc.get(Posts.status)) {
            acc.set(Posts.status, {
                id: Posts.status,
                Posts[]
            })
        }

        acc.get(Posts.status)!.Post.push({
            $id: Posts.$id,
            $createdAt: Posts.$createdAt,
            title: Posts.title,
            status: Posts.status,
            
        })
        return acc;
    }, new Map<TypedColumn, Column> ());

    console.log(columns);
    // if columns does not have inprogress, todo and done. 
    //Add them with empty posts

    const ColumnTypes: TypedColumn[] = {"Rejected", "Offer", "Applied", "Assessment", "Interview"};
    for (const ColumnType of ColumnTypes) {
      if(!columns.get(ColumnType)) {
        columns.set(ColumnType, {
          id: ColumnType,
          posts: [],
        })
      }
    }

    // sort columns by columnType
    const sortedColums = new Map(
      Array.from(columns.enteries()).sort(
        (a,b) => ColumnTypes.indexOf(a,[0]) - ColumnTypes.indexOf{b[0]}
      )
    );

    const board: Board = {
      columns: sortedColums,
    };

    return board;
}
*/
// new
// src/libs/getPostsGroupedByColumn.ts

/*
import { PrismaClient } from '@prisma/client';
import { JobStatus } from '@prisma/client'; // Adjust based on your actual enums/types
import { InternshipStatus } from '@prisma/client'; // Adjust based on your actual enums/types

const prisma = new PrismaClient();

export const getPostsGroupedByColumn = async () => {
  try {
    // Fetch job postings grouped by status
    const jobPosts = await prisma.job.findMany({
      orderBy: { postedDate: 'desc' }, // Example: Order by most recent first
    });

    // Fetch internship postings grouped by status (if needed)
    // const internshipPosts = await prisma.internship.findMany({...});

    // Group job posts by status
    const groupedJobs = jobPosts.reduce((acc, job) => {
      const status = job.status as JobStatus;
      if (!acc.has(status)) {
        acc.set(status, {
          id: status,
          posts: [],
        });
      }
      acc.get(status)?.posts.push({
        id: job.id,
        createdAt: job.postedDate,
        title: job.jobTitle,
        status: job.status,
      });
      return acc;
    }, new Map<JobStatus, { id: JobStatus; posts: { id: string; createdAt: Date; title: string; status: JobStatus }[] }>());

    // Return grouped jobs map
    return groupedJobs;
  } catch (error) {
    console.error('Error fetching and grouping posts:', error);
    throw new Error('Failed to fetch and group posts');
  }
};

*/