import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { BsArrowBarLeft } from "react-icons/bs";
import { BsArrowBarRight } from "react-icons/bs";

import { SidebarData } from "../SidebarData/SidebarData";
import "./Navbar.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  const token = useSelector((state) => state.login_reducer).token;
  console.log(token);
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar flex items-cenrer bg-[#1677FF]">
          <div>
            <Link to="#" className="menu-bars flex items-center">
              <BsArrowBarRight onClick={toggleSidebar} />
            </Link>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={toggleSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <BsArrowBarLeft />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={`nav-text`}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
