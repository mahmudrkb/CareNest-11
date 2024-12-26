import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

 const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { userLogout } = useAuth();
  const navigate=useNavigate()
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        // console.log("error caught", err.response);
        if (err.response.status == 401 || err.response.status == 403) {
            userLogout();
            navigate("/login")

        }
      }
    );
  }, [userLogout,navigate]);
  return axiosSecure
};
export default useAxiosSecure;
