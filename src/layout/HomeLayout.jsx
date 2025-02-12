import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Review from "../components/Review";
import Question from "../components/Question";
import TopNavbar from "../components/TopNavbar";

const HomeLayout = () => {
  return (
    <div className="roboto-thin dark:bg-indigo-950 dark:text-white">
      <header className="container mx-auto p-3 ">
        {" "}
       
        <TopNavbar></TopNavbar>
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
