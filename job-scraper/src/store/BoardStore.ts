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
  updatedDate: Date;
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
  updatePostsInDB:(post: Post, columnId:TypedColumn) => void;
  deletePostInDB:(post: Post, columnId:TypedColumn) => void;
}

export const useBoardStore = create<BoardState>((set) => ({

  board: {
    columns: new Map<TypedColumn, Column>(), 
  },

  getBoard: async () => {
    try {
      console.log('Fetching board data...');
      const response = await fetch('/api/jobs/getJobsGroupedByStatus');
      const boardData = await response.json();
  
      const columnsMap = new Map<Status, Column>();
      
  
     
      // Check if boardData.columns exists and is an array
        if (boardData.columns) {
        // Iterate over each [key, column] tuple in the boardData.columns array
          boardData.columns.forEach(([key, column] : [Status, Column]) => {
          console.log("Processing column:", key);
          // Add the key and corresponding column data to the columnsMap
          columnsMap.set(key, {
            id: key,
            posts: column.posts,
          });
        });
          
      } else {
        console.error(`Empty or invalid boardData.columns: ${JSON.stringify(boardData.columns)}`);
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

    deletePostInDB: async (post, columnId) => {
      await fetch('/api/jobs/deletePostInDB', {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: post.id, status: columnId }),
      });

},
}));

