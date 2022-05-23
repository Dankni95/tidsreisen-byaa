import React from "react";
import { FaMapSigns, FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import "./navbar.css";

export const NavbarData = [
  {
    title: "Kart",
    path: "/map",
    icon: <FaMapSigns />,
    className: "nav-text-map",
  },
  {
    title: "Min profil",
    path: "/profile",
    icon: <FaUser />,
    className: "nav-text-profile",
  },
  {
    title: "Logg ut",
    path: "/login",
    icon: <BiLogOut />,
    className: "nav-text-logout",
    logout: true,
  },
];
