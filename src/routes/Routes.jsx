import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Error from "../components/Error";
import Login from "../pages/Authentication/Login";
import Home from "../components/Home";
import Register from "../pages/Authentication/Register";
import AddService from "../pages/AddService";
import AllService from "../pages/AllService";
import DetailsService from "../pages/DetailsService";
import PrivateRoute from "./PrivateRoute";
import ManageService from "../pages/ManageService";
import UpdateService from "../pages/UpdateService";
import BookedService from "../pages/BookedService";
import AllBooked from "../pages/AllBooked";
import TodoService from "../pages/TodoService";
import Contact from "../components/Contact";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/service",
        element: <AllService></AllService>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DetailsService></DetailsService>
          </PrivateRoute>
        ),
      },
      {
        path: "/booked/:id",
        element: (
          <PrivateRoute>
            {" "}
            <BookedService></BookedService>
          </PrivateRoute>
        ),
      },
      {
        path: "/booked",
        element: (
          <PrivateRoute>
            <AllBooked></AllBooked>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateService></UpdateService>,
      },
      {
        path: "/todo",
        element: (
          <PrivateRoute>
            <TodoService></TodoService>,
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
