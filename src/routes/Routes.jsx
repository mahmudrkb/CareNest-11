import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Error from "../components/Error";
import Login from "../pages/Authentication/Login";
import Home from "../components/Home";
import Register from "../pages/Authentication/Register";
import AddService from "../pages/AddService";
import AllService from "../pages/AllService";
import DetailsService from "../pages/DetailsService";

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
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<Register></Register>
      },
      {
        path:"/addService",
        element:<AddService></AddService>
      },
      {
        path:"/service",
        element:<AllService></AllService>
      },
      {
        path:"/details/:id",
        element:<DetailsService></DetailsService>
      }


    ],
  },
]);
export default router;
