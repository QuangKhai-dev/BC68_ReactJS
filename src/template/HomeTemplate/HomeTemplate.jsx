import React from "react";
import Header from "./../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
const HomeTemplate = () => {
  return (
    <div>
      <Outlet />
      <Header />
      <Header />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
