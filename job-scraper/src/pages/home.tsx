/*import Header from "@/components/layout/Header";
import InfoGrid from "@/components/layout/InfoGrid";
import Table from "@/components/layout/Jobdata";
import Landing from "@/components/layout/Landing";


const LandingPage = () => {
    return (
        <div>
            <div className="bg-white-600 w-full h-screen">
                <Header/>
                <Landing/>
                <InfoGrid />
                <Table></Table>
            </div>
        </div>
    );
}
export default LandingPage;*/
import React from 'react';
import Landing from '@/components/layout/Landing';
import InfoGrid from '@/components/layout/InfoGrid';
import Table from '@/components/layout/Jobdata';
import Header from "@/components/layout/Header";

const Home = () => {
    console.log("Rendering Home component...");
  return (
    <div className="bg-white-600 w-full h-screen">
    <Header/>
      <Landing />
      <InfoGrid />
      <Table />
    </div>
  );
}

export default Home;
