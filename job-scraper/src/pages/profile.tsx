import Header from "@/components/layout/Header";
import UserHome from "@/components/userHome";
import UserHero from "./users/userHero";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import Footer from "@/components/footer";

const profile = () => {
    const router = useRouter();
    const { userId } = router.query as { userId: string };

    const { data: fetchedUser, isLoading} = useUser(userId);
    console.log("The users user id is this: ", userId);
    return (
        <>
            <Header />
            <UserHome showBackArrow label="User Profile"  />
            <UserHero userId={userId} />
            <Footer/>
        </>
    );
}
export default profile;