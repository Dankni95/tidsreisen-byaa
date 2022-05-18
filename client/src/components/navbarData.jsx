import React from "react";
import { MdAudiotrack, MdQuiz } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi";
import { FaMapSigns, FaUser } from "react-icons/fa";

export const NavbarData = [
  {
    title: "Kart",
    path: "/map",
    icon: <FaMapSigns />,
    className: "nav-text-map",
  },
  {
    title: "Quiz",
    path: "/quiz",
    icon: <MdQuiz />,
    className: "nav-text-child",
  },
  {
    title: "Historie",
    path: "/history",
    icon: <GiBackwardTime />,
    className: "nav-text-child",
  },
  {
    title: "Lyd",
    path: "/audio",
    icon: <MdAudiotrack />,
    className: "nav-text-child",
  },
  {
    title: "Min profil",
    path: "/profile",
    icon: <FaUser />,
    className: "nav-text-profile",
  },
];
