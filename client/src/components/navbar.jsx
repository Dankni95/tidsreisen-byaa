import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavbarData } from "./navbarData.jsx";
import "./navbar.css";
import { IconContext } from "react-icons";

export function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    return setSidebar(!sidebar);
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#F2F2F2" }}>
        <div className={"navbar"}>
          <Link to={"#"} className={"menu-bars"}>
            <FaIcons.FaBars
              onClick={showSidebar}
              style={{ color: "#4A8554" }}
            />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className={"nav-menu-items"} onClick={showSidebar}>
            {/*<div>
              <h1 className={"app-name"}>Tidsreisen</h1>
            </div>*/}
            <li className="navbar-toggle">
              <Link to={"#"} className={"menu-bars"}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
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
