import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "./navbarData.jsx";
import "./navbar.css";

export function Navbar() {
  const [clickedIconColor, setClickedIconColor] = useState({
    id: null,
  });

  function clickedIconNavbarHandler(itemId) {
    setClickedIconColor({
      id: itemId,
    });
  }

  if (
    window.location.pathname !== "/" &&
    window.location.pathname !== "/login"
  ) {
    return (
      <div id={"navbar-container"}>
        <div className={"navbar"}>
          <nav className={"nav-menu"}>
            <ul className={"nav-menu-items"}>
              {NavbarData.map((item, index) => {
                return (
                  <div key={index}>
                    <li>
                      <Link
                        onClick={() => clickedIconNavbarHandler(item.id)}
                        id={item.id}
                        style={
                          item.id === clickedIconColor.id
                            ? { color: "#000000", opacity: "1" }
                            : { color: "#000000", opacity: "0.6" }
                        }
                        className={"icon-and-title"}
                        to={item.path}
                      >
                        {item.id === clickedIconColor.id
                          ? item.iconActive
                          : item.icon}
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
