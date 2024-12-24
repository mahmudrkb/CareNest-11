import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Review from "./Review";
import Question from "./Question";
import Footer from "./Footer";
import PopularService from "./PopularService";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <header className="container mx-auto  ">
      <Helmet>
        <title>Home || CareNest</title>
      </Helmet>
        {" "}
        <Banner></Banner>
      </header>

      <main>
        <section>
          <PopularService></PopularService>
        </section>
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
