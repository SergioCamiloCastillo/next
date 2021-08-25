import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { BASE_PATH } from "../utils/constants";

import Image from "next/image";
import SwiperCore, { Autoplay } from "swiper/core";
SwiperCore.use([Autoplay]);

const Tecnologies = ({ items }) => {
  const API_URL = "https://www.idevcol.com";

  return (
    <Fragment>
      <div className='container carousel-tecnologies'>
      <Swiper
      
      autoplay={{
        "delay":8000,
        "speed":2000
      
      }}
        loop={true}
        slidesPerView={5}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        spaceBetween={20}
        centeredSlides={true}
        
        
        
        className="mySwiper"
      >
          {items
            ? items.map((item, index) => (

        <SwiperSlide className='carousel-tecnologies__item'><Image src={API_URL + item.Logo[0].url`}  width={70} height={50}></Image></SwiperSlide>
        ))
        : "Cargando..."}
      </Swiper>
      </div>
    </Fragment>
  );
};

export default Tecnologies;
