import Lottie from "lottie-react";
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../../../public/json/login.json";
import AuthProvider, { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  // Google Signin
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signin Successful");

    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div>
      <div className="  sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold ">
          <span className="text-indigo-600"> Log In</span> to your account
        </h2>
        <h3 className="text-center  mt-3">
          {" "}
          Don't have an Account ?
          <span className=" text-indigo-600 hover:text-slate-600">
            {" "}
            <Link to={"/signup"}>Sign Up</Link>{" "}
          </span>
        </h3>
      </div>
      <div className="grid md:grid-cols-2 justify-center items-center">
        <div>
          <Lottie className=" " animationData={login} loop={true} />
        </div>
        <div className="">
          <div className=" sm:mx-auto border-2 rounded-lg bg-indigo-100 shadow-lg  p-10   sm:w-full sm:max-w-lg">
            <form method="POST" className="space-y-6">
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
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-5 text-center text-sm/6 text-gray-500">
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
