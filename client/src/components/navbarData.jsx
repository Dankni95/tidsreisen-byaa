import React from "react";
import { FaMapSigns, FaUser } from "react-icons/fa";
import "./navbar.css";
import { IoScan } from "react-icons/io5";
import {
  RiMap2Fill,
  RiMap2Line,
  RiQrScan2Fill,
  RiQrScan2Line,
  RiUser3Fill,
  RiUser3Line,
} from "react-icons/ri";

export const NavbarData = [
  {
    title: "Kart",
    path: "/map",
    //icon: <FaMapSigns size={20} />,
    icon: <RiMap2Line size={20} />,
    iconActive: <RiMap2Fill size={20} />,
    id: "nav-text-map",
  },
  {
    title: "QR-scan",
    path: "/camera",
    //icon: <IoScan size={20} />,
    icon: <RiQrScan2Line size={20} />,
    iconActive: <RiQrScan2Fill size={20} />,
    id: "nav-text-qr",
  },
  {
    title: "Profil",
    path: "/profile",
    //icon: <FaUser size={20} />,
    icon: <RiUser3Line size={20} />,
    iconActive: <RiUser3Fill size={20} />,
    id: "nav-text-profile",
  },
];
