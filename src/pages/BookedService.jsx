import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const BookedService = () => {
  const  axiosSecure  = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [services, setService] = useState([]);

  useEffect(() => {
    allServiceFetch();
  }, []);

  const allServiceFetch = async () => {
    const { data } = await axiosSecure.get(`/details/${id}`);
    setService(data);
  };

  const handleBooked = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const serviceName = form.serviceName.value;
    const servicePhoto = form.servicePhoto.value;
    const providerEmail = form.providerEmail.value;
    const providerName = form.providerName.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const date = form.date.value;
    const instruction = form.instruction.value;
    const price = parseFloat(form.price.value);
    const formData = {
      id,
      serviceName,
      servicePhoto,
      providerEmail,
      providerName,
      userEmail,
      userName,
      date,
      instruction,
      price,
      status: "Pending",
    };

    // console.log(formData);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/bookedService`,
        formData
      );
      toast.success("Service Booked Successfully");
      navigate("/booked");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Booked Service || CareNest</title>
      </Helmet>
      <div className=" container mx-auto p-3 mb-5 mt-5 ">
        <h2 className="mt-10 text-center text-3xl font-bold ">
          <span className="text-indigo-600"> Booked</span> Your Service
        </h2>

        <section className=" mt-5 sm:mx-auto border-2 rounded-lg bg-indigo-100 shadow-lg  p-30   sm:w-full sm:max-w-2xl  p-10 ">
          <form onSubmit={handleBooked}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="id">
                  Service Id
                </label>
                <input
                  id="id"
                  name="id"
                  type="text"
                  defaultValue={services?._id}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="name">
                  Service Name
                </label>
                <input
                  id="name"
                  name="serviceName"
                  type="text"
                  defaultValue={services?.name1}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="photo">
                  Service Image
                </label>
                <input
                  id="photo"
                  name="servicePhoto"
                  type="URL"
                  defaultValue={services?.photo1}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="providerEmail">
                  Provider Email
                </label>
                <input
                  id="providerEmail"
                  name="providerEmail"
                  type="email"
                  defaultValue={services?.provider?.email}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>{" "}
              <div>
                <label className="text-gray-700 " htmlFor="providerName">
                  Provider Name
                </label>
                <input
                  id="providerName"
                  name="providerName"
                  type="text"
                  defaultValue={services?.provider?.name}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Current User Email
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="userEmail"
                  defaultValue={user?.email}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor=" providerName">
                  Current User Name
                </label>
                <input
                  id=" providerName"
                  type="text"
                  name="userName"
                  defaultValue={user?.displayName}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="date">
                  Service Taking Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <label className="text-gray-700 " htmlFor="instruction">
                Special Instruction
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="instruction"
                id="instruction"
                placeholder="Customized Service Plane Here"
              ></textarea>
            </div>

            <div className="mt-6">
              <label className="text-gray-700 " htmlFor="price">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                defaultValue={services?.price}
                disabled={true}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Purchase
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BookedService;
