
import {
    DraggableProvidedDragHandleProps,
    DraggableProvidedDraggableProps
} from "react-beautiful-dnd";
import { getTime } from "@/utils/date";


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
    const dateFormated = getTime(new Date(posts.postedDate));
    
    return (
        <div
            className="bg-white rounded-md space-y-2 drop-shadow-md"
            {...draggableProps}
            {...dragHandleProps}
            ref={innerRef}
        >
            <div className="flex justify-between items-center p-5 ">
                <p>{posts.title}</p>
                <p className="text-ellipsis overflow-hidden ... flex justify-between items-center p-3">
                    <p>{posts.company}</p>
                </p>
                <p className="text-ellipsis overflow-hidden ... ">
                    <p>{dateFormated}</p>
                </p>
                <button className="text-red-500 hover:text-red-600">
                    <div className="ml-5 h-8 w-8">close</div>
                </button>
            </div>
        </div>
    )
}
export default PostCard;
