import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

const AllService = () => {

    const[services,setService]=useState([])

    useEffect(()=>{
        allServiceFetch()

    },[])

    const allServiceFetch=async()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/allService` );
        setService(data)
    }

    const {_id,photo1,name1,price,area,description,provider}=services || {}
    console.log(services)
  return (
    <div>
      <div className="container mx-auto p-3 my-5">
        <h1 className="text-3xl mb-3 font-bold">All Service : {services.length}</h1>
       <div className="">
        {
            services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>
               
            )
        }
       </div>
      </div>
    </div>
  );
};

export default AllService;
