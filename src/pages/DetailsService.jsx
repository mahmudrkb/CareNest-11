import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const DetailsService = () => {
  const axiosSecure=useAxiosSecure()
  const { id } = useParams();

  const [service, setService] = useState(null);

  useEffect(() => {
    singleDataFetch();
  }, [id]);

  const singleDataFetch = async () => {
    const { data } = await axiosSecure.get(
      `/details/${id}`
    );
    setService(data);
  };

  const { _id, photo1, name1, price, area, description, provider } =
    service || [];
// console.log(service)
  return (
    <div className="my-16 container mx-auto p-3">
            <Helmet>
        <title>Details Service || CareNest</title>
      </Helmet>
      <div className="card grid grid-cols-1 md:grid-cols-2 lg:card-side bg-base-100  shadow-xl">
        <figure>
          <img className="h-full w-full " src={photo1} alt="Album" />
        </figure>
        <div className="card-body text-black ">
          <h2 className="card-title">{name1}</h2>
          <p>{description}</p>

          <div className="mt-3">
            <div>
              <h2 className="font-bold">Provider : </h2>
              <div className="flex items-center mb-5  md:gap-5">
                <div>
                  <h2>
                    {" "}
                    <span className="font-semibold">Name :</span>{" "}
                    {provider?.name}
                  </h2>
                  <h2>
                    {" "}
                    <span className="font-semibold">Email :</span>{" "}
                    {provider?.email}
                  </h2>
                </div>
                <img
                  className="w-14 h-14 rounded-full"
                    src={provider?.photo}
                  alt=""
                />
              </div>
              <h2>
                {" "}
                <span className="font-semibold">Area :</span> {area}
              </h2>
              <h2>
                {" "}
                <span className="font-semibold">Price : $</span> {price}
              </h2>
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/booked/${_id}`} className="btn btn-primary">Book Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsService;
