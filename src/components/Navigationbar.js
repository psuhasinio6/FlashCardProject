import React from "react";
import { NavLink } from "react-router-dom" 
import {AiFillCaretDown} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineCalendar} from 'react-icons/ai'
function Navigationbar(){
        const activeLink = {
            color: "grey",
            fontSize : "1.2rem",
            fontWeight : "bold",
        };
        
        const inactiveLink = {
            color: "grey" ,
            fontSize : "1.2rem",
        };

        return (
            <nav className="navbar navbar-expand-sm navbar ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                   
                    </a>
                    <button 
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-controls="navbarSupportContent"
                        aria-expanded="false"
                        arial-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item me-3" >
                                    <NavLink
                                        className="nav-link"
                                        to="/"
                                        style={({ isActive }) =>{
                                            return isActive ? activeLink : inactiveLink;
                                        }}
                                    >
                                        Home
                                        <AiOutlineHome></AiOutlineHome>
                                    </NavLink>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink
                                        className="nav-link"
                                        to="/Mycalendar"
                                        style = {({ isActive}) => {
                                            return isActive ? activeLink : inactiveLink ;
                                        }}
                                    >
                                        Mycalendar
                                        <AiOutlineCalendar></AiOutlineCalendar>
                                    </NavLink>
                                </li>
                                <li className="nav-item me-3" >
                                    <NavLink
                                        className="nav-link"
                                        to="/Widgets"
                                        style = {({ isActive}) =>{
                                            return isActive ? activeLink:inactiveLink;
                                        }}
                                    >
                                        Widgets
                                    <AiFillCaretDown></AiFillCaretDown>
                                    </NavLink>
                                </li>
                                <li className="nav-item me-3">
                                <img
                                     src="https://tse2.mm.bing.net/th?id=OIP.3y99tsyJ_iOO5pZKmAvI_QHaHa&pid=Api&P=0&h=180"
                                    width="60px"
                                    className="border rounded-circle"
                                    alt=""
                                 />
                                </li>
                            </ul>
                        </div>
                </div>
                
            </nav>
           
        );
}
 
export default Navigationbar;