import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const PopularService = () => {

    const [services, setService] = useState([]);

    useEffect(() => {
      allServiceFetch();
    }, []);
  
    const allServiceFetch = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/allService`
      );
      setService(data);
    };
  
    return (
        <div className='container mx-auto p-3 my-5'>
           <div>
           <h1 className='text-xl mb-3 mt-3 md:text-3xl font-bold'>Popular Service</h1>
           <p>Professional Home Cleaning Services for a sparkling clean space.</p>
           </div>

           <div className=' '>
            {
                services.slice(0,6).map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)

            }
           </div>
        </div>
    );
};
 
export default PopularService;