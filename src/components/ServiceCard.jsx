import React from "react";

const ServiceCard = ({ service }) => {
  const { _id, photo1, name1, price, area, description, provider } = service || {};
  return (
    <div className="my-10">
      <div
        key={service._id}
        className="card grid grid-cols-1 md:grid-cols-2 lg:card-side bg-base-100  shadow-xl"
      >
        <figure>
          <img className="h-full w-full " src={photo1} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name1}</h2>
          <p>{description}</p>

          <div className="mt-3">
            <div>
              <h2 className="font-bold">Provider : </h2>
              <div className="flex items-center mb-5  md:gap-5">
                <div >
                  <h2>
                    {" "}
                    <span className="font-semibold">Name :</span>{" "}
                    {provider.name}
                  </h2>
                  <h2>
                    {" "}
                    <span className="font-semibold">Email :</span>{" "}
                    {provider.email}
                  </h2>
                </div>
                <img
                  className="w-14 h-14 rounded-full"
                  src={provider.photo}
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
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
