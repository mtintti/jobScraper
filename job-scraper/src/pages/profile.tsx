import Header from "@/components/layout/Header";
import UserHome from "@/components/userHome";
import UserHero from "./users/userHero";
import { useRouter } from "next/router";
import Footer from "@/components/footer";
import ChartComponent1 from "@/components/charts/BarChart";
import SuccessRatePieChart from "@/components/charts/PieSuccessChart";


const profile = () => {
    const router = useRouter();

    return (
        <>
            <Header />
            <UserHome showBackArrow label="User Profile" />
            <UserHero/>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 text-black-300">
                <div className="col-start-1 row-start-3 max-w-[10rem] font-bold tracking-tight text-zinc-900 md:text-left md:text-[4.5rem] md:leading-[4.5rem] lg:text-8xl xl:max-w-[10rem] xl:text-5xl">
                    Postings data</div>
                <div className="col-start-1 row-start-4 max-w-xl text-start text-zinc-900 md:text-left md:text-lg md:leading-6 md:tracking-normal">
                    Total Posts
                
                <ChartComponent1/>
                </div>
                <div className="col-start-2 row-start-4 max-w-xl text-start text-zinc-900 md:text-left md:text-lg md:leading-6 md:tracking-normal">
                    Success Rate
                    <SuccessRatePieChart/>
                </div>
                <div className="col-start-1 row-start-5"></div>
            </div>
            <Footer />
        </>
    );
}
export default profile;