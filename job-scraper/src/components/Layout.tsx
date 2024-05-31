/*import Header from "./layout/Header";
import InfoGrid from "./layout/InfoGrid";
import Table from "./layout/Jobdata";
import Landing from "./layout/Landing";


//import SideBarItem from "./layout/Header";
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <div className="bg-white-600 w-full h-screen">
                <Header />
                <Landing />
                <InfoGrid />
                <Table></Table>
            </div>
        </div>
    );
}

export default Layout;*/
import React, { ReactNode } from 'react';
import Header from './layout/Header';
import Landing from './layout/Landing';
import InfoGrid from './layout/InfoGrid';
import Table from './layout/Jobdata';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    console.log("Rendering Layout component...");
  return (
    <div>
        <Header />


    </div>
  );
}

export default Layout;

      /*{children}*/
/*       <Landing/>
      <InfoGrid/>
      <Table/> */