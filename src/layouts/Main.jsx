/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
