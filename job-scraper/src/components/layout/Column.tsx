
import { Draggable, Droppable } from "react-beautiful-dnd";
import PostCard from "./PostCard";
import { Status } from "@prisma/client";
import useJobModal from "@/hooks/useJobModal"; 
import { useCallback } from "react";

type Props = {
    id: Status,
    posts: Post[],
    index: number
    
};


const idToColumnText: Record<Status, string> = {
    "Rejected": "Rejected",
    "Applied": "Applied",
    "Assessment": "Assessment",
    "Interview": "Interview",
    "Offer": "Offer",
};

function Column({ id, posts, index }: Props) {



    const JobModal = useJobModal();
    const onClick = useCallback(() => {
        console.log("JobtrackerButton clicked");
        JobModal.onOpen();
    }, [JobModal]);

    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {/* Droppable posts renderöinti columnissa */}
                    <Droppable droppableId={id} type="card">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={`p-2 rounded-2xl shadow-sm ${snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                                    }`}
                            >
                                <h2 className="flex justify-between font-bold text-xl p-2">
                                    {idToColumnText[id]}
                                    <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-2 text-sm font-normal">
                                        {posts.length}
                                    </span>
                                </h2>

                                <div className="space-y-2">
                                    {posts.map((post, index) => (
                                        <Draggable
                                            key={post.id}
                                            draggableId={post.id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <PostCard
                                                    posts={post}
                                                    index={index}
                                                    id={id}
                                                    innerRef={provided.innerRef}
                                                    draggableProps={provided.draggableProps}
                                                    dragHandleProps={provided.dragHandleProps}
                                                />
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                                <div onClick={onClick} >
                                    <div className="flex items-end justify-end p-2">
                                        <button className="text-green-500 hover:text-green-600">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    );
}

export default Column;
