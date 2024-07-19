
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
      const response = await fetch('/api/jobs/getJobsGroupedByStatus');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const boardData = await response.json();
      const columnsMap = new Map<Status, Column>();
     
      // Tarkistetaan että boardData.columns on olemassa.
        if (boardData.columns) {
        // Iteratetaan jokaisen [key, column] tuplen läpi boardData.column Arrayssä
          boardData.columns.forEach(([key, column] : [Status, Column]) => {
          // ja lisätään key ja column data columnsMap:iin.
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

