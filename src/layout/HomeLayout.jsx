import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const HomeLayout = () => {
  return (
    <div className="roboto-thin">
      <header className="container mx-auto p-3 my-5">
        {" "}
        <Navbar></Navbar>{" "}
        <Banner></Banner>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
