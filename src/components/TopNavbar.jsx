import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { IoMoon, IoSunny } from "react-icons/io5";
import { ul } from "motion/react-client";

const TopNavbar = () => {
  const { user, userLogout } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    userLogout();
    navigate("/");
  };

  // visit medium
  //tailwind config add darkMode: 'class',
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  const route = (
    <>
      <li className="dark:bg-slate-400 mx-2  font-semibold dark:rounded-2xl">
        <Link to="/">Home </Link>
      </li>
      <li className="dark:bg-slate-400 mx-2 font-semibold dark:rounded-2xl">
        <Link to="/service">Service</Link>
      </li>
      <li className="dark:bg-slate-400 mx-2 font-semibold dark:rounded-2xl">
        <Link to="/contact">Contact Us</Link>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0  w-full z-10 dark:bg-indigo-950 bg-base-200 shrink-md shadow-md">
      <div className="navbar  container mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content dark:bg-slate-200   gap-2 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {route}
            </ul>
          </div>
          <div className="flex-1">
            <Link to="/" className="flex md:gap-3 items-center">
              <img
                className=" bg-slate-300 rounded-full h-10"
                src={logo}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2">{route}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm  dropdown-content mt-3 z-[1] p-3 shadow dark:bg-slate-400 dark:rounded-2xl bg-base-200 rounded-box w-52 font-semibold "
              >
                <li>
                  <Link to="/addService">Add Service</Link>
                </li>
                <li>
                  <Link to="/manage">Manage service</Link>
                </li>
                <li>
                  <Link to="/booked">Booked Service</Link>
                </li>
                <li>
                  <Link to="/todo">Service To Do</Link>
                </li>

                <li className="mt-2">
                  <button
                    onClick={handleLogout}
                    className="bg-gray-200 text-black block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
          {!user && (
           <ul className="">
             <li className="dark:bg-slate-400 px-3 py-1 none font-semibold  dark:rounded-2xl">
              <Link to="/login">Login</Link>
            </li>
           </ul>
          )}
          <div className="  flex justify-end">
            <button className="text-3xl mx-5" onClick={darkModeHandler}>
              {dark ? <IoSunny /> : <IoMoon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
