import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface UserHomeProps {
    label: string;
    showBackArrow: boolean;
}

const UserHome: React.FC<UserHomeProps> = ({ label, showBackArrow }) => { 
    const router = useRouter();

    const handleBack = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <div className="border-b-[1px] border-neutral-800 p-5">
            <div className="flex flex-row items-center gap-3">
                {showBackArrow && (
                    <BiArrowBack
                        onClick={handleBack}
                        color="black"
                        size={28}
                        className="cursor-pointer hover:opacity-70 transition"
                    />
                )}
                <h1 className="text-Black text-xl font-semibold">{label}</h1>
            </div>
        </div>
    );
}

export default UserHome;
