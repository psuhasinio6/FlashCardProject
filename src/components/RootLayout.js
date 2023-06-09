import Navigationbar from './Navbar/Navigationbar';


import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <div className="content-container">
        <Navigationbar />
        <div className="container">
          <Outlet />
        </div>
      </div>
      
    </div>
  );
}

export default RootLayout;