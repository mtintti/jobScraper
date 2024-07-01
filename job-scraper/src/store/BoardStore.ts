//old code from tutorial
/*import { getPostsGroupedByColumn } from '@/libs/getPostsGroupedByColumn';
import { create } from 'zustand'

interface BoardState {
    board: Board;
    getBoard: () => void;
    setBoardState: (board: Board) => void;
    updatePostsInDB: (post: Posts, columnId:TypedColumn) => void;
}

export const useBoardStore = create((set) => ({
 board: {
    colums: new Map<TypedColumn, Column>()
 },
 getBoard: async() => {
    const Board = await getPostsGroupedByColumn();
    set {{ board }};

 },
 setBoardState: (board) => set({ board }),

 updatePostInDB:async (post, columnId) => {
   await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABSE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      posts.$id,
      {
         title: post.title,
         status: columnId,
      }
   );
 }
}))
 */

// current

import { create } from 'zustand';
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
  columns: Map<Status, Column>;
}

interface BoardState {
  board: Board;
  getBoard: () => Promise<void>;
  setBoardState: (board: Board) => void;
  //updateJobInDB: (job: Job, status: Status) => void;
  //updateInternshipInDB: (internship: Internship, status: Status) => void;
  updatePostsInDB:(post: Post, columnId:TypedColumn) => void;
}

export const useBoardStore = create<BoardState>((set) => ({

  board: {
    columns: new Map<TypedColumn, Column>(), // Initial empty Map
  },
  /*getBoard: async () => {
    try {
      console.log('Fetching board data...');
      const response = await fetch('/api/jobs/getJobsGroupedByStatus');
      const boardData = await response.json();
      console.log('API response from board:', boardData);

      const columnsMap = new Map<Status, Column>();

      if (boardData.columns && typeof boardData.columns === 'object' ) {
       // if (boardData.columns && typeof boardData.columns === 'object' && Object.keys(boardData.columns).length > 0) {
        console.log('Type of boardData.columns:', typeof boardData.columns);
        console.log('boardData.columns:', boardData.columns);
        Object.entries(boardData.columns).forEach(([key, column]) => {
          console.log("Processing column",key);
          const statusKey = key as Status;
          const typedColumn = column as Column;
         
          columnsMap.set(statusKey, {
            id: statusKey,
            posts: typedColumn.posts,
          });
        });
        //console.log('Entries from Object.entries(boardData.columns):', Object.entries(boardData.columns));
        console.log('Board state updated with entries:', columnsMap);
      } else {
        console.error('boardData.columns is not an object:', boardData.columns);
      }

      set((state) => ({
        board: {
          ...state.board,
          columns: columnsMap,
        },
      }));
    } catch (error) {
      console.error('Error fetching board data:', error);
    }
  },
  */

  // placeholder data to see if ui is working real is up commented

  getBoard: async () => {
    try {
      console.log('Fetching board data...');
      const response = await fetch('/api/jobs/getJobsGroupedByStatus');
      const boardData = await response.json();
      //console.log('API response from board:', boardData); // prev boardData
      //console.log('boardData == BoardStore is Map:', boardData instanceof Map);
      //console.log('boardData == BoardStore is Object:', boardData instanceof Object);

  
      const columnsMap = new Map<Status, Column>();
      
  
      //if (boardData.columns && typeof boardData.columns === 'object' && Object.keys(boardData.columns).length > 0) {
      // Check if boardData.columns exists and is an array
        if (boardData.columns) {
        //Object.entries(boardData.columns).forEach(([key, column]) => {
        // Iterate over each [key, column] tuple in the boardData.columns array
          boardData.columns.forEach(([key, column] : [Status, Column]) => {
          console.log("Processing column:", key);
          //const statusKey = key as Status;
          //const typedColumn = column as Column;
          // Add the key and corresponding column data to the columnsMap
          columnsMap.set(key, {
            id: key,
            posts: column.posts,
          });
        });
          
      } else {
        // Use placeholder data when boardData.columns is empty or invalid
        console.error(`Empty or invalid boardData.columns: ${JSON.stringify(boardData.columns)}`);
        const placeholderData: Board = {
          columns: new Map<Status, Column>([
              [Status.Applied, {
                  id: Status.Applied,
                  posts: [{
                      id: '1',
                      title: 'Sample Job 1',
                      company: 'Company A',
                      description: 'Sample description',
                      requirements: 'Sample requirements',
                      location: 'Location A',
                      postedDate: new Date(),
                      status: Status.Applied,
                      userId: 'user1'
                  }]
              }],
              [Status.Applied, {
                  id: Status.Applied,
                  posts: [{
                      id: '2',
                      title: 'Sample Job 2',
                      company: 'Company B',
                      description: 'Sample description',
                      requirements: 'Sample requirements',
                      location: 'Location B',
                      postedDate: new Date(),
                      status: Status.Applied,
                      userId: 'user1'
                  }]
              }],
              [Status.Assessment, {
                  id: Status.Assessment,
                  posts: [{
                      id: '3',
                      title: 'Sample Job 3',
                      company: 'Company C',
                      description: 'Sample description',
                      requirements: 'Sample requirements',
                      location: 'Location C',
                      postedDate: new Date(),
                      status: Status.Assessment,
                      userId: 'user1'
                  }]
              }],
              [Status.Offer, {
                  id: Status.Offer,
                  posts: [{
                      id: '4',
                      title: 'Sample Job 4',
                      company: 'Company D',
                      description: 'Sample description',
                      requirements: 'Sample requirements',
                      location: 'Location D',
                      postedDate: new Date(),
                      status: Status.Offer,
                      userId: 'user1'
                  }]
              }],
              [Status.Rejected, {
                  id: Status.Rejected,
                  posts: [{
                      id: '5',
                      title: 'Sample Job 5',
                      company: 'Company E',
                      description: 'Sample description',
                      requirements: 'Sample requirements',
                      location: 'Location E',
                      postedDate: new Date(),
                      status: Status.Rejected,
                      userId: 'user1'
                  }]
              }],
          ]),
      };
        placeholderData.columns.forEach((column, key) => {
          columnsMap.set(key, column);
        });
      }
  
      set((state) => ({
        board: {
          ...state.board,
          columns: columnsMap,
        },
      }));
      console.log('Board state updated with columns:', columnsMap);
    } catch (error) {
      console.error('Error fetching board data:', error);
    }
  },

  // end of placeholder
  setBoardState: (board) => set({ board }),
  
  updatePostsInDB: async (post, columnId) => {
    await fetch('/api/jobs/updatePostsInDB', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: post.id, status: columnId }),
    });


},
  /*
  updateJobInDB: async (job, status) => {
    await fetch('/api/jobs/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: job.id, status }),
    });
    set((state) => {
      const updatedColumns = new Map(state.board.columns);
      return { board: { columns: updatedColumns } };
    });
  },

  updateInternshipInDB: async (internship, status) => {
    await fetch('/api/addInternship', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: internship.id, status }),
    });
    set((state) => {
      const updatedColumns = new Map(state.board.columns);
      return { board: { columns: updatedColumns } };
    });
  },
  */

}));

