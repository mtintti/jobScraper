/*import { DraggableProvidedDragHandleProps, 
    DraggableProvidedDraggableProps
} from "react-beautiful-dnd";

type Props = {
    posts: Posts,
    index: number,
    id: TypedColumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

function PostCard({
    posts,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps
}: Props) {
    return(
        <div
         className="bg-white rounded-md space-y-2 drop-shadow-md"
         {...draggableProps}
         {...dragHandleProps}
         ref={innerRef}
        >
            <div className="flex justify-between items-center p-5">
                <p>{posts.title}</p>
                <button className="text-red-500 hover:text-red-600">
                    <XCircleIcon className"ml-5 h-8 w-8"/>
                </button>
            </div>

        </div>
    )
}
export default PostCard;*/

// new
import {
    DraggableProvidedDragHandleProps,
    DraggableProvidedDraggableProps
} from "react-beautiful-dnd";
import { Status } from "@prisma/client";


type Props = {
    posts: Post,
    index: number,
    id: TypedColumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

function PostCard({
    posts,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps
}: Props) {
    const dateFormated = new Date(posts.postedDate).toLocaleDateString();
    // console.log(`Rendering PostCard for post id: ${posts.id}`);
    return (
        <div
            className="bg-white rounded-md space-y-2 drop-shadow-md"
            {...draggableProps}
            {...dragHandleProps}
            ref={innerRef}
        >
            <div className="flex justify-between items-center p-5 ">
                <p>{posts.title}</p>
                <p>{posts.company}</p>
                <p>{posts.location}</p>
                <p>{dateFormated}</p>
                <button className="text-red-500 hover:text-red-600">
                    <div className="ml-5 h-8 w-8">close</div>
                </button>
            </div>
        </div>
    )
}
export default PostCard;

/*
<button className="text-red-500 hover:text-red-600">
<div className"ml-5 h-8 w-8">close</div>
</button>*/

/*<div className="flex justify-between items-center p-5">
    <p>{posts.title}</p>
    <p>{posts.company}</p>
    <p>{posts.location}</p>
    <button className="text-red-500 hover:text-red-600">
        <div className="ml-5 h-8 w-8">close</div>
    </button>
</div>*/

/* <div className="grid grid-cols-3 md:grid-ccols-3 items-center p-5 ">
                <div className="grid grid-cols-1 md:grid-ccols-3 items-center p-5 gap-2 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 items-right">
                        <p>{posts.title}</p>
                    </div>
                    <p>{posts.company}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-ccols-3 items-center p-5 gap-2 max-w-7xl mx-auto">
                    <p>{posts.location}</p>
                    <p>{dateFormated}</p>
                </div>
            </div>
            <button className="text-red-500 hover:text-red-600">
                <div className="ml-5 h-8 w-8">close</div>
            </button>
        </div> */