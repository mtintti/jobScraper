import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { ClipLoader } from 'react-spinners';
import UserHero from "./userHero";
import UserHome from "@/components/userHome";
import Header from "@/components/layout/Header";

const Userview = () => {
    const router = useRouter();
    const { userId } = router.query as { userId: string };

    const { data: fetchedUser, isLoading} = useUser(userId);
    console.log("The users user id is this: ", userId);

    if (isLoading || !fetchedUser) {
        return (
            <div className="
                flex
                justify-center
                items-center
                h-full">
                <ClipLoader color="lightblue" size={50}/>
            </div>
        );
    }

    return (
        <>
            <Header/>
            <UserHome showBackArrow label="User Profile" />
            <UserHero userId={userId} />
        </>
    );
}

export default Userview; 
