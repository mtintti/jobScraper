
import useUser from "@/hooks/useUser";
import { useCallback } from "react";
import router from "next/router";
import Image from "next/image";



interface AvatarProps {
    userId: string,
    isLarge?: boolean,
    hasBorder?: boolean;
}
const Avatar: React.FC<AvatarProps> = ({
    userId,
    isLarge,
    hasBorder
}) => {
    const { data: fetchedUser } = useUser(userId);
    return (
        <div
            className={`
            ${hasBorder ? `border-4 border-black` : ""}
            ${isLarge ? 'h-32' : 'h-12'}
            ${isLarge ? 'w-32' : 'w-12'}
            rounded-full
            hover:opacity-90
            transition
            cursor-pointer
            relative
        `}
        >
            <Image
                fill
                style={{
                    objectFit: 'cover',
                    borderRadius: '100%'
                }}
                alt="Avatar"
                src={fetchedUser?.profileImage || '/images/placeholder.png'} />


        </div>
    );
}
export default Avatar;

