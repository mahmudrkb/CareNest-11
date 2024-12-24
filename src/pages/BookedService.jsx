import React from "react";
import { Helmet } from "react-helmet";

const BookedService = () => {
  return (
    <div>
      <Helmet>
        <title>Booked Service || CareNest</title>
      </Helmet>
      <div className=" container mx-auto p-3 mb-5 ">
        <h2 className="mt-10 text-center text-3xl font-bold ">
          <span className="text-indigo-600"> Booked</span> Your Service
        </h2>

        <section className=" mt-5 sm:mx-auto border-2 rounded-lg bg-indigo-100 shadow-lg  p-30   sm:w-full sm:max-w-2xl  p-10 ">
          <form>
            {/* onSubmit={handleSubmit} */}
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="photo">
                  Service Id
                </label>
                <input
                  id="photo"
                  name="photo1"
                  type="URL"
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
                  name="name1"
                  type="text"
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
                  name="photo1"
                  type="URL"
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="price">
                  Provider Email
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>{" "}
              <div>
                <label className="text-gray-700 " htmlFor="price">
                  Provider Name
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
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
                  name="email"
                  // defaultValue={user?.email}
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
                  type="name"
                  name="name"
                  // defaultValue={user?.displayName}
                  disabled={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="price">
                  Service Taking Date
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <label className="text-gray-700 " htmlFor="description">
                Special Instruction
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                id="description"
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
