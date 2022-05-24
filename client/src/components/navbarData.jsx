import React from "react";
import { FaMapSigns, FaUser } from "react-icons/fa";
import "./navbar.css";
import { IoScan } from "react-icons/io5";

export const NavbarData = [
  {
    title: "Kart",
    path: "/map",
    icon: <FaMapSigns size={20} />,
    id: "nav-text-map",
  },
  {
    title: "QR-scan",
    path: "/camera",
    icon: <IoScan size={20} />,
    id: "nav-text-qr",
  },
  {
    title: "Profil",
    path: "/profile",
    icon: <FaUser size={20} />,
    id: "nav-text-profile",
  },
];
