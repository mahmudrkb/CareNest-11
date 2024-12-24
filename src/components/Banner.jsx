import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-h-screen"
      >
        <SwiperSlide className=" ">
          <img
            className="w-full"
            src={
              "https://media.istockphoto.com/id/870219332/photo/cleaning-lady-with-a-bucket-and-cleaning-products.jpg?s=612x612&w=0&k=20&c=yJEWJWM0BNd4u0VZHA6rL11P1jrK78zWN2dBqoLaNZ0="
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src={
              "https://media.istockphoto.com/id/1226023669/photo/its-a-pleasure-doing-business-with-you.jpg?s=612x612&w=0&k=20&c=JPlOlUHjm-qMT8uym_df7vRlEpy8oHKdkNQ43ofzCT4="
            }
            alt=""
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full"
            src={
              "https://media.istockphoto.com/id/1128180520/photo/professional-cleaning-service-team-working-with-cleaning-equipment-in-room-cleaning-service.jpg?s=612x612&w=0&k=20&c=vHjEf_VPMvm-vuGa6v9nhDwzFqPLxDrVYXip2bRuno8="
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src={
              "https://media.istockphoto.com/id/615098472/photo/person-holding-a-mop-pail.jpg?s=612x612&w=0&k=20&c=CmcLFH964kXriSh-oF58HV1Lh0dpqwt5sqsJvNQ2iP8="
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src={
              "https://media.istockphoto.com/id/1308375457/photo/cleaning-air-conditioner.jpg?s=612x612&w=0&k=20&c=OQD4wICPb1il7sqz6Vx5kDHbeXhTMT4IJCcez7bp1EA="
            }
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
