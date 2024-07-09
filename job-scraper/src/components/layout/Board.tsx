// old code from tutorial
/*import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./Column";

function Board() {
    const [board, getBoard, setBoardState, updatePostsInDB] = useBoardStore((state) => state.getBoard, state.board, state.setBoardState, state.updatePostsInDB);

    useEffect(() => {
        getBoard();
    }, [getBoard]);

    const handleOnDragEnd = (result: DropResult) => {
        const {destination, source, type} = result;

        // check if user dragged card outside of board
        if (!destination) return;

        // Handle column drag
        if (type === "column") {
            const entries = Array.from(board.columns.entries());
            const [removed] = entries.slice(source.index,1);
            const rearrangedColumns = new Map(entries);
            setBoardState {{
                ...board,
                columns: rearrangedColumns,
            }};
        }

        // this step is needed as indexes are stored as numbers 0,1,2... 
        // instead of id's with DND library

        const columns = Array.from(board.columns);
        const  startColIndex = columns[Number(source.droppableId)];
        const finishColIndex = columns[Number(destination.droppableId)];

        const startCol: Column = {
            id: startColIndex[0],
            posts: startColIndex[1].posts,
        };

        const finishCol: Column = {
            id: finishColIndex[0],
            posts: finishColIndex[1].posts,
        };

        if (!startCol || !finishCol) return;
        if(source.index === destination.index && startCol === finishCol) return;
        
        const newPosts = startCol.posts;
        const [postsMoved] = newPosts.splice(source.index,1);

        if (startCol.id === finishCol.id) {
            //same column task drag
            newPosts.splice(destination.index, 0, postsMoved);
            const newCol = {
                id: startCol.id,
                posts: newPosts,
            };
            const newColumns = new Map(board.columns);
            newColumns.set(startCol.id, newCol);

            setBoardState({...Board, columns: newColumns});
        } else {
            // dragging an another column
            const finishColumns = Array.from(finishCol.posts);
            finishPosts.splice(destination.index, 0, postsMoved);

            const newColumns = new Map(board.columns);
            const newCol = {
                id: startCol.id,
                posts: newPosts,
            };

            newColumns.set(startCol.id, newCol);
            newColumns.set (finishCol.id{
                id: startCol.id,
                posts: newPosts,
            });

            // update in db
            updatePostInDB(postsMoved, finishCol.id);

            setBoardState({...Board, columns:newColumns});
        }

    };
    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="board" direction="horizontal" type="colum">
                {(provided) => (
                    <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    >
                        {Array.from(board.columns.entries()).map(([id, column], index) => (
                            <Column key={id} id={id} posts={column.posts} index={index} />
                        ))}
                    </div>
                )}
            </Droppable>
        </DragDropContext>  
    );
}
export default Board;
*/



// current board
import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
import { Status } from "@prisma/client";


type Props = {
    id: Status,
    posts: Post[],
    index: number
};

function Board() {
    console.log("Rendering Board component"); 
    const { board, getBoard, setBoardState, updatePostsInDB} = useBoardStore(
        (state) => ({
            board: state.board,
            getBoard: state.getBoard,
            setBoardState: state.setBoardState,
            updatePostsInDB: state.updatePostsInDB,  
            
        })
    );

    useEffect(() => {
        getBoard();
    }, [getBoard]);


    const handleOnDragEnd = async (result: DropResult) => {
        const { destination, source, type } = result;

        if (!destination) return;

        if (type === "column") {
            const entries = Array.from(board.columns.entries())
            const [removed] = entries.splice(source.index, 1);
            entries.splice(destination.index, 0, removed);
            const rearrangedColumns = new Map(entries);

            setBoardState({
                ...board,
                columns: rearrangedColumns,
            });
            return;
        }

        const columns = Array.from(board.columns);
        console.log('columns:', columns);
        const startColIndex = columns.findIndex(([id]) => id === source.droppableId);
        console.log('startColIndex:', startColIndex);
        const finishColIndex = columns.findIndex(([id]) => id === destination.droppableId);
        console.log('source.droppableId:', source.droppableId);
        console.log('destination.droppableId:', destination.droppableId);

      
        const startCol = {
            id: columns[startColIndex][0], 
            posts: columns[startColIndex][1].posts,
        };

        const finishCol = {
            id: columns[finishColIndex][0],   
            posts: columns[finishColIndex][1].posts,
        };


        if (!startCol || !finishCol) return;
        if (source.index === destination.index && startCol.id === finishCol.id) return;

        const newPosts = Array.from(startCol.posts);
        const [postMoved] = newPosts.splice(source.index, 1);

        // new after the posts: newPost, 
        if (startCol.id === finishCol.id) {
            newPosts.splice(destination.index, 0, postMoved);
            const newCol = {
                id: startCol.id,
                posts: newPosts,
            };
            const newColumns = new Map(board.columns);
            newColumns.set(startCol.id, newCol);

            setBoardState({ ...board, columns: newColumns });
        } else {
            const finishPosts = Array.from(finishCol.posts);
            finishPosts.splice(destination.index, 0, postMoved);

            const newStartCol = {
                id: startCol.id,
                posts: newPosts,
            };
            const newFinishCol = {
                id: finishCol.id,
                posts: finishPosts,
            };

            const newColumns = new Map(board.columns);
            newColumns.set(startCol.id, newStartCol);
            newColumns.set(finishCol.id, newFinishCol);
            
            try {
                await updatePostsInDB(postMoved, finishCol.id);
                console.log("Sending posting to updated database...")
                
            } catch (error) {
                console.error('Error updating database:', error);
            }


            setBoardState({ ...board, columns: newColumns });
            console.log("New updated database is, ", newColumns);
        }
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="board" direction="horizontal" type="column">
                {(provided) => (
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto "
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {Array.from(board.columns.entries()).map(([id, column], index) => (
                            <Column key={id} id={id} posts={column.posts as Post[]} index={index}/>
                        ))}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default Board;
