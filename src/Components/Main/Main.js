import React from "react";
import { Outlet } from "react-router-dom";
import Bigfooter from "../Bigfooter/Bigfooter";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Bigfooter></Bigfooter>
      <Footer></Footer>
    </div>
  );
};

export default Main;
