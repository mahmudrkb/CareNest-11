import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-auto h-24" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu font-bold menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Service</Link>
          </li>
          <li>
            <div
              tabIndex={0}
              role="button"
              className="dropdown dropdown-end dropdown-bottom z-50"
            >
              <div className="">Dashboard</div>
              <ul
                tabIndex={0}
                className="dropdown-content  menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow  mt-3 "
              >
                <li>
                  <Link to="/add-service" className="justify-between">
                    Add Service
                  </Link>
                </li>
                <li>
                  <Link to="/my-posted-jobs">Manage service</Link>
                </li>
                <li>
                  <Link to="/my-bids">Booked Service</Link>
                </li>
                <li>
                  <Link to="/bid-requests">Service To Do</Link>
                </li>
              </ul>
            </div>
          </li>

          {/* {!user && ( */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* )} */}
        </ul>

        {/* {user && ( */}
        <div className="dropdown dropdown-end z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {/*  title={user?.displayName} */}
            <div className="w-10 rounded-full">
              <img
                referrerPolicy="no-referrer"
                alt="User Profile Photo"
                //   {user?.photoURL}
                src=""
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="mt-2">
              {/*  onClick={logOut} */}
              <button className="bg-gray-200 block text-center">Logout</button>
            </li>
          </ul>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
