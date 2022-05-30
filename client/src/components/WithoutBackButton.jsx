// WithoutBackButton.js (Stand-alone Functional Component)
import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Outlet } from "react-router-dom";
import { BackButton } from "./BackButton.jsx";

export default () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
