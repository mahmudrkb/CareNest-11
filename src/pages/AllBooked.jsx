import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AuthProvider";
import { div, h1 } from "motion/react-client";

const AllBooked = () => {
  const { user } = useContext(AuthContext);
  const [bookedServices, setBookedServices] = useState(null);

  useEffect(() => {
    bookedDataFetch();
  }, [user]);

  const bookedDataFetch = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/detailsBooked/${user?.email}`
    );
    setBookedServices(data);
  };

  return (
    <div className="container mx-auto p-3 my-5">
      <Helmet>
        <title>All Booked || CareNest</title>
      </Helmet>
    

      <div className="">
        <div className="flex items-center gap-x-3">
          <h2 className=" text-xl md:text-3xl font-semibold   ">
            All Booked Services
            <span className="text-indigo-600 mx-3 bg-indigo-200 px-2 py-1  text-lg rounded-full">{bookedServices?.length}</span>
          </h2>
        </div>

     

        <div className="flex  flex-col mt-6">
          <div className=" overflow-x-auto ">
            <div className="inline-block min-w-full py-2 align-middle ">
              <div className="overflow-hidden border border-indigo-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-indigo-200">
                  <thead className="bg-indigo-200">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Service Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Price</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800"
                      >
                        Provider
                      </th>

                      <th className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-indigo-800 ">
                    {/* Generate dynamic tr */}

                    {bookedServices?.map(
                      (booked) => (
                        // user.email === booked.userEmail && (
                        <tr key={booked._id}>
                          <td className="px-4 py-4 text-sm text-gray-800  whitespace-nowrap">
                            {booked?.serviceName}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-800  whitespace-nowrap">
                            ${booked?.price}
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              {booked?.date}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-800  whitespace-nowrap">
                            {booked?.providerEmail}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap"></td>
                        </tr>
                      )
                      // )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10">
        {bookedServices?.length === 0 && (
          <h1 className="text-xl text-center md:text-3xl font-bold text-red-500 ">
            User No Booked Service
          </h1>
        )}
      </div>
      </div>
    </div>
  );
};

export default AllBooked;
