import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ service }) => {
  AOS.init();
  const { _id, photo1, name1, price, area, description, provider } =
    service || {};
  return (
    <div className="my-5 flex ">
      <div
        data-aos="zoom-in-up"
        key={service._id}
        className="card grid grid-cols-1 md:grid-cols-2 lg:card-side  shadow-xl"
      >
        <figure className="">
          <img
            className="min-h-full w-full object-cover "
            src={photo1}
            alt="Album"
          />
        </figure>

        <div className="card-body bg-base-200 text-black rounded-md">
          <h2 className="card-title">{name1}</h2>
          <div className="flex justify-between">
            <address className="font-semibold"> {area}</address>
            <h2 className="font-semibold bg-green-200 rounded-md text-green-700 p-1">
              {" "}
              ${price}
            </h2>
          </div>
          <p>{description.substring(0, 50)}...</p>

          <div className="mt-3">
            <div>
              <h2 className="font-bold">Provider : </h2>
              <div className="flex items-center mb-5  md:gap-5">
                <div>
                  <h2>
                    {" "}
                    <span className="font-semibold"></span> {provider.name}
                  </h2>
                  <h2>
                    {" "}
                    <span className="font-semibold"></span> {provider.email}
                  </h2>
                </div>
                <img
                  className="w-10 h-10 rounded-full"
                  src={provider.photo}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="card-actions ">
            <Link
              to={`/details/${_id}`}
              className="btn min-h-9 h-2  p-2 btn-primary"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
