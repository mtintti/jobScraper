
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
        // Columnin uudelleen järjestäminen
        // ja Board Staten päivittäminen uudella column järjestelyllä
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
        // Postauksien uuden järjestyksen columnin sisällä / välillä hallinta.
        const columns = Array.from(board.columns);
        const startColIndex = columns.findIndex(([id]) => id === source.droppableId);
        const finishColIndex = columns.findIndex(([id]) => id === destination.droppableId);
      
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

        // Jos postaus on siirretty samassa columnissa, päivitettään uusi postaus järjestely.
        if (startCol.id === finishCol.id) {
            newPosts.splice(destination.index, 0, postMoved);
            const newCol = {
                id: startCol.id,
                posts: newPosts,
            };
            const newColumns = new Map(board.columns);
            newColumns.set(startCol.id, newCol);

            setBoardState({ ...board, columns: newColumns });
            // muuten postaus on siirretty uuteen columiin, päivitetään postauksen status 
            // ja päivitetään Postin status tietokantaan.
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
                
            } catch (error) {
                console.error('Error updating:', error);
            }

            setBoardState({ ...board, columns: newColumns });
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
