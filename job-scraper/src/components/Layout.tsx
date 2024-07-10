
import React, { ReactNode } from 'react';
import Header from './layout/Header';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
    console.log("Rendering Layout component...");

    return (
        <div>
            <Header />
        </div>
    );
}

export default Layout;
