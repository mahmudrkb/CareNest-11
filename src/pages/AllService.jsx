import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

const AllService = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    allServiceFetch();
  }, []);

  const allServiceFetch = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/allService`
    );
    setService(data);
  };

  const { _id, photo1, name1, price, area, description, provider } =
    services || {};
  console.log(services);
  return (
    <div>
      <div className="container mx-auto ">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://d3tl80hy6t5toy.cloudfront.net/wp-content/uploads/sites/4/2014/08/06051815/service-industry.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">All Service Here</h1>
              <p className="mb-5">
                Conveniently supply go forward human capital after
                functionalized testing procedures. Dynamically maintain
                prospective methods of empowerment via low-risk high-yield
                technology.
              </p>
            </div>
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
