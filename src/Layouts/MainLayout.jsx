import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
