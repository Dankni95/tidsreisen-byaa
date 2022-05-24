import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarData } from "./navbarData.jsx";
import "./navbar.css";

export function Navbar() {
  const [clickedIconColor, setClickedIconColor] = useState({
    id: null,
  });

  function clickedIconColorHandler(itemId) {
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
                        onClick={() => clickedIconColorHandler(item.id)}
                        id={item.id}
                        style={
                          item.id === clickedIconColor.id
                            ? { color: "#4a8554" }
                            : { color: "#333333" }
                        }
                        className={"icon-and-title"}
                        to={item.path}
                      >
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
