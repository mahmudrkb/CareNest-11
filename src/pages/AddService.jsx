import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddService = () => {
  const axiosSecure=useAxiosSecure()
 
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const photo1 = form.photo1.value;
    const name1 = form.name1.value;
    const price = parseFloat(form.price.value);
    const area = form.area.value;
    const description = form.description.value;
    const formData = {
      photo1,
      name1,
      price,
      area,
      provider: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      description,
    };

    // console.log(formData);

    try {
      await axiosSecure.post(`/add-service`, formData,);
      toast.success("Service Added Successfully");
      navigate("/service");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Add Service || CareNest</title>
      </Helmet>
      <div className=" container mx-auto p-3 mb-5 ">
        <h2 className="mt-10 text-center text-3xl font-bold ">
          <span className="text-indigo-600"> Add</span> Your Service
        </h2>

        <section className=" mt-5 sm:mx-auto border-2 rounded-lg bg-indigo-100 shadow-lg  p-30   sm:w-full sm:max-w-2xl  p-10 ">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="photo">
                  Image URL
                </label>
                <input
                  id="photo"
                  name="photo1"
                  type="URL"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="name">
                  Service Name
                </label>
                <input
                  id="name"
                  name="name1"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="price">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="area">
                  Service Area
                </label>
                <input
                  id="area"
                  name="area"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Provider Email
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor=" providerName">
                  Provider Name
                </label>
                <input
                  id=" providerName"
                  type="name"
                  name="name"
                  defaultValue={user?.displayName}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <label className="text-gray-700 " htmlFor="photo">
                Provider Photo
              </label>
              <input
                id="photo"
                type="URL"
                name="Photo"
                defaultValue={user?.photoURL}
                disabled={true}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <label className="text-gray-700 " htmlFor="description">
                Description
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                id="description"
              ></textarea>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Service
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddService;
