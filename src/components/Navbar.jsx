import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 shadow-sm container  mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex md:gap-3 items-center">
          <img className=" h-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu font-bold menu-horizontal md:px-1">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>

          {user && (
            <li>
              <div
                tabIndex={0}
                role="button"
                className="dropdown dropdown-end dropdown-bottom z-50"
              >
                <div className="">Dashboard</div>
                <ul
                  tabIndex={0}
                  className="dropdown-content  menu bg-base-100 rounded-box z-[1] w-52 p-3 shadow  mt-3 "
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
                </ul>
              </div>
            </li>
          )}

          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              <li className="mt-2">
                <button
                  onClick={userLogout}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
