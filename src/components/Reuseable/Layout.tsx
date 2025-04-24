// src/components/Resuable/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Renders the selected route
import LeftSidebar from '../Sidebar/LeftSidebar';
// import Header from '../header/Header';

const Layout: React.FC = () => {
  return (
    <div>
      {/* <Header username="JohnDoe"
        profileImage="https://via.placeholder.com/150" /> */}

      <div className='flex gap-5'>
        <LeftSidebar />

        <Outlet />
      </div>
    </div>

  );
};

export default Layout;
