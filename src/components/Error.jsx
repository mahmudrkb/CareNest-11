import React from "react";
import img from "../assets/error.png"
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <div>
      <main className="grid min-h-full  place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold h-1/5 w-1/5 mx-auto"><img src={img} alt="error" /></p>
          <h1 className=" text-balance text-5xl font-semibold tracking-tight  sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to={"/"}
             
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Go back home
            </Link>
           
          </div>
        </div>
      </main>
    </div>
  );
};

export default Error;
