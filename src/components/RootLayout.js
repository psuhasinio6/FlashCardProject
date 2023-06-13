import React from "react";
import Navigationbar from './Navigationbar';
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
        <Navigationbar />
        <div className="bg-light p-1 pt-1">
          <h5 style={{color:'blue'}}>FLASH CARDS</h5>
          <div className="m-3 p-5" style={{backgroundColor:'white'}} >
          <Outlet />
          </div>
       
        </div>
         
    </div>
  )
}

export default RootLayout;