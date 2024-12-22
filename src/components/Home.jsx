import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Review from "./Review";
import Question from "./Question";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <header className="container mx-auto p-3 my-5">
        {" "}
        
        <Banner></Banner>
      </header>

      <main>
        <section>
          <Review></Review>
        </section>
        <section>
          <Question></Question>
        </section>
      </main>

     
    </div>
  );
};

export default Home;
