import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";

const TodoService = () => {
    const axiosSecure=useAxiosSecure()
  const { user } = useContext(AuthContext);
  const [todoServices, setTodoServices] = useState(null);

  useEffect(() => {
    bookedDataFetch();
  }, [user]);

  const bookedDataFetch = async () => {
    const { data } = await axiosSecure.get(
      `/todoService/${user?.email}`
    );
    setTodoServices(data);
  };

  const handleStatusChange= async(id,prevStatus,status)=>{
  if(prevStatus===status|| prevStatus==="Completed") return console.log("already completed")
try{
    const {data}=await axiosSecure.patch(`/statusUpdate/${id}` , {status})
    // console.log(data)
    bookedDataFetch();


}catch(err){
// console.log(err.message)
}

  }

  return (
    <div className="container mx-auto p-3 my-5">
      <Helmet>
        <title>Service To Do || CareNest</title>
      </Helmet>

      <div className="">
        <div className="flex items-center gap-x-3">
          <h2 className=" text-xl md:text-3xl font-semibold   ">
            Services To Do
            <span className="text-indigo-600 mx-3 bg-indigo-200 px-2 py-1  text-lg rounded-full">
              {todoServices?.length}
            </span>
          </h2>
        </div>

        <div className="flex   flex-col mt-6">
          <div className=" overflow-x-auto ">
            <div className="inline-block min-w-full py-2 align-middle ">
              <div className="overflow-hidden border border-indigo-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-indigo-200">
                  <thead className="bg-indigo-200">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Service Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Price</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800"
                      >
                        User
                      </th>

                      <th className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800">
                        Status
                      </th>

                      <th className="py-3.5 px-4 text-sm  text-left rtl:text-right font-semibold text-indigo-800">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-indigo-800 ">
                    {/* Generate dynamic tr */}

                    {todoServices?.map((todo) => (
                      <tr key={todo._id}>
                        <td className="px-4 py-4 text-sm text-gray-800  whitespace-nowrap">
                          {todo?.serviceName}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-800  whitespace-nowrap">
                          <span className="px-2 py-1 rounded-full bg-red-200 text-red-800">
                            {" "}
                            ${todo?.price}
                          </span>
                        </td>

                        <td className="px-4 py-4 text-gray-800  text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            {todo?.date}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-800  whitespace-nowrap">
                          {todo?.userEmail}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-800  whitespace-nowrap">
                        <span className="px-2 py-1 rounded-full bg-green-200 text-green-800">
                              {" "}
                              {todo.status}
                            </span>
                          
                        </td>

                        <td className="dropdown absolute dropdown-end">
                          <div
                            tabIndex={0}
                            role="button"
                            className=" px-4 py-4 text-sm whitespace-nowrap  "
                          > <span className="px-2 py-1 bg-slate-300 rounded-full">Select      </span>                     
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow"
                          >
                            <li onClick={()=>handleStatusChange(todo._id,todo.status,"Working")}>
                              <a>Working</a>
                            </li>
                            <li onClick={()=>handleStatusChange(todo._id,todo.status,"Completed")}>
                              <a>Completed</a>
                            </li>
                          </ul>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10">
          {todoServices?.length === 0 && (
            <h1 className="text-xl text-center md:text-3xl font-bold text-red-500 ">
              User No Service to Do
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoService;
