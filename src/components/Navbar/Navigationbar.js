import React from "react";
import "./Navigationbar.css" ; 
import { NavLink } from "react-router-dom" 


function Navigationbar(){
        const activeLink = {
            color: "#ffaa00",
            fontSize : "1.2rem",
            fontWeight : "bold",
        };
        
        const inactiveLink = {
            color: "#EEFOF2" ,
            fontSize : "1.2rem",
        };

        return (
            <nav className="navbar navbar-expand-sm navbar bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/WLM_logo-2.svg/404px-WLM_logo-2.svg.png"
                        width="60px"
                        className="shadow"
                        alt=""
                    />
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
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/"
                                        style={({ isActive }) =>{
                                            return isActive ? activeLink : inactiveLink;
                                        }}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/Mycalendar"
                                        style = {({ isActive}) => {
                                            return isActive ? activeLink : inactiveLink ;
                                        }}
                                    >
                                        Mycalendar
                                    </NavLink>
                                </li>
                                <li className="nav-item" >
                                    <NavLink
                                        className="nav-link"
                                        to="/Widgets"
                                        style = {({ isActive}) =>{
                                            return isActive ? activeLink:inactiveLink;
                                        }}
                                    >
                                        Widgets
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                </div>
                
            </nav>
           
        );
}
 
export default Navigationbar;