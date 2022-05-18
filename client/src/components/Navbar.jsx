import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "./navbarData.jsx";
import "./navbar.css";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";
import { GoThreeBars } from "react-icons/go";

export function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    return setSidebar(!sidebar);
  }

  return (
    <div>
      <IconContext.Provider value={{ color: "#F2F2F2" }}>
        <div className={"navbar"}>
          <Link to={"#"} className={"menu-bars"}>
            <GoThreeBars onClick={showSidebar} style={{ color: "#4A8554" }} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className={"nav-menu-items"} onClick={showSidebar}>
            <div>
              <h1 className={"app-name-title"}>Tidsreisen</h1>
            </div>
            <li className="navbar-toggle">
              <Link to={"#"} className={"menu-bars"}>
                <IoClose />
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
    </div>
  );
}
