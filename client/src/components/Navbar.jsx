import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarData } from "./navbarData.jsx";
import "./navbar.css";

export function Navbar() {
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState(false);

  /*function showActiveColor() {
    return setActiveIcon(!activeIcon);
  }*/

  /*function pathLocation() {
    setActiveIcon(!activeIcon);
  }*/

  // todo not in use, logout moves to /profile
  /*async function logOut() {
    navigate("/login");
    await fetchJSON_client("/api/deleteCookie");
  }*/

  if (window.location.pathname !== "/" && window.location.pathname !== "/") {
    return (
      <div id={"navbar-container"}>
        <div className={"navbar"}>
          <nav className={"nav-menu"}>
            <ul className={"nav-menu-items"}>
              {NavbarData.map((item, index) => {
                return (
                  <div key={index} id={"navbar-children-container"}>
                    <li className={item.className}>
                      <Link className={"icon-and-title"} to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
