import React from "react";
import {
  AiFillHome,
  FaUser,
  GiBackwardTime,
  MdAudiotrack,
  MdQuiz,
} from "react-icons/all.js";

export const NavbarData = [
  {
    title: "Kart",
    path: "/map",
    icon: <AiFillHome />,
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
