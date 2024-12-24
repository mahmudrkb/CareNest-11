import Lottie from "lottie-react";
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import signup from "../../assets/json/signup.json";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { setUser, createNewUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);

  const navigate = useNavigate();

  // create new user
  const handleCreateNewUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
      //2. Registration
      const result = await createNewUser(email, password);
      await updateUserProfile(name, photo);
      setUser({ ...result.user, photoURL: photo, displayName: name });
      toast.success("Signup Successful");
      navigate("/");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  // Google Signin
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();

      toast.success("Signin Successful");
      navigation("/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  return (
    <div>
      <div className="  sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold ">
          <span className="text-indigo-600"> Sign Up</span> to your account
        </h2>
        <h3 className="text-center  mt-3">
          {" "}
          Have an Account ?
          <span className=" text-indigo-600 hover:text-slate-600">
            {" "}
            <Link to={"/login"}> Log In</Link>{" "}
          </span>
        </h3>
      </div>
      <div className=" grid md:grid-cols-2 items-center justify-center px-6 py-12 lg:px-8">
        <div>
          <Lottie
            className=" mx-auto h-full"
            animationData={signup}
            loop={true}
          />
        </div>

        <div className="mt-5 sm:mx-auto border-2 p-10 rounded-lg bg-indigo-100 shadow-lg  p-30   sm:w-full sm:max-w-lg">
          <form
            onSubmit={handleCreateNewUser}
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="text"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Photo URL
              </label>
              <div className="mt-2">
                <input
                  id="photo"
                  name="photo"
                  type="URL"
                  required
                  autoComplete="url"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 pt-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="form-control text-sm ml-2 text-red-500 ">
              {/* {errorMgs} */}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-5 text-center text-sm/6 text-gray-500">
            ---------- OR ----------
            <div className="text-center mt-3">
              {" "}
              <button
                onClick={handleGoogleLogin}
                className="btn hover:bg-indigo-600 hover:text-white hover:border-indigo-600 text-indigo-600 px-7 py-3 border-2 border-indigo-600 "
              >
                {" "}
                <FaGoogle />
                Login With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
