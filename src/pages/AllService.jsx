import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import * as motion from "motion/react-client";
import "animate.css";
import { Helmet } from "react-helmet";

const AllService = () => {
  const box1 = {
    width: 50,
    height: 50,
    background: "linear-gradient(to right, #ff0088, #0088ff)",
    borderRadius: 5,
  };
  const [services, setService] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    allServiceFetch();
  }, [ search]);

  const allServiceFetch = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/allService?search=${search}`
    );
    setService(data);
  };

  // const { _id, photo1, name1, price, area, description, provider } =
  //   services || {};
  // console.log(services);
  return (
    <div>
            <Helmet>
        <title>All Service || CareNest</title>
      </Helmet>
      <div className="container mx-auto ">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://d3tl80hy6t5toy.cloudfront.net/wp-content/uploads/sites/4/2014/08/06051815/service-industry.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60">
            <div className="flex justify-end m-16">
              {" "}
              <motion.div
                className="m-10"
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                style={box1}
              />
            </div>{" "}
          </div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 animate__animated  animate__backInDown text-3xl md:text-5xl font-bold">
                All Service Here
              </h1>

              <p className="mb-5  animate__animated  animate__backInUp">
                Conveniently supply go forward human capital after
                functionalized testing procedures. Dynamically maintain
                prospective methods of empowerment via low-risk high-yield
                technology.
              </p>
            </div>
            <div></div>
          </div>
        </div>

        <div className=" p-3  mt-10 md:flex justify-between items-center">
          <h1 className="text-3xl  font-bold">
            All Service : {services.length}
          </h1>
          <form>
            <div className="flex justify-end p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-3   text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter Service Name"
                aria-label="Enter Service Name"
              />

              <button className="px-1 flex justify-end md:px-4 py-3 text-sm font-medium tracking-wider uppercase transition-colors duration-300 transform btn btn-primary focus:outline-none">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className=" p-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllService;
