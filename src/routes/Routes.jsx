import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<Error></Error>,
    children:[
        {
            path:'/',
            element:<></>
        }
    ]
  },
]);
export default router;
