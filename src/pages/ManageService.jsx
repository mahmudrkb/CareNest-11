import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageService = () => {
  const axiosSecure=useAxiosSecure()
  const { user } = useContext(AuthContext);

  const [services, setService] = useState([]);

  useEffect(() => {
    allServiceFetch();
  }, []);

  const allServiceFetch = async () => {
    const { data } = await axiosSecure.get(
      `/myService/${user?.email}`
    );
    setService(data);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.delete(
          `/myService/${id}`
        );
        if (data.deletedCount === 1) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Service has been deleted.",
            icon: "success",
          });
        }
        allServiceFetch();
      }
      
    });
  };

  return (
    <div className="">
            <Helmet>
        <title>Manage Service || CareNest</title>
      </Helmet>
      <div className="container mx-auto p-3 my-10">
        <div className="flex items-center gap-x-3">
          <h2 className=" text-xl md:text-3xl font-semibold   ">My Services</h2>

          <span className="px-3 py-1 text-xs text-green-600 bg-green-100 rounded-full ">
            {services.length}
          </span>
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
                        Area
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800"
                      >
                        <span>Provider</span>
                      </th>

                      <th className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-indigo-800 ">
                    {/* Generate dynamic tr */}

                    {services.map((service) => (
                      <tr key={service._id}>
                        <td className="px-4 py-4 text-sm text-gray-800  whitespace-nowrap">
                          {service.name1}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-800  whitespace-nowrap">
                          ${service.price}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-800  whitespace-nowrap">
                          {service.area}
                        </td>
                        <td className="px-4 py-4 text-gray-800  text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            {service.description.substring(0, 18)}...
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-800  whitespace-nowrap">
                          {service.provider?.email}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <Link
                              to={`/update/${service._id}`}
                              className="text-gray-800 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </Link>
                            <button
                              onClick={() => handleDelete(service._id)}
                              className="text-gray-800 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
