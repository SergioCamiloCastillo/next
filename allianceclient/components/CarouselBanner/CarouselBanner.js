import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BASE_PATH } from "../../utils/constants";

import Image from 'next/image'
import SwiperCore, {
    Navigation,
    EffectFade, Autoplay, Parallax, Pagination
} from 'swiper/core';
SwiperCore.use([Navigation, EffectFade, Autoplay, Parallax, Pagination]);

/*Styles*/
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/pagination/pagination.min.css";

const CarrouselBanner = ({ items }) => {
  
    return (
        <Fragment>
            <Swiper speed={900} lazy={true} autoplay={{
                "delay": 18000,
                "disableOnInteraction": false
            }}  effect={'fade'} navigation={true} slidesPerView={1} spaceBetween={90} loop={true} className="mySwiper">

                {
                    items ?
                        items.map((component, index) => (
                            <SwiperSlide>
                                <Image width={1600}
                                    height="1000" src={`${BASE_PATH}${component.Imagen[0].url}`} />
                                <div className='container'>
                                    <div className='carousel__title'>{component.TituloBanner}</div>

<<<<<<< HEAD
                            <SwiperSlide><div><Image width={1600}
                                height="1000" src={`${BASE_PATH}${component.Imagen[0].url}`} />
                                <p>{component.TituloBanner}</p></div>
=======
                                </div>
>>>>>>> 5f73dc8cf39e3dfac60ec0a4cf7919257259cb0b
                            </SwiperSlide>



                        ))
                        : 'Cargando...'
                }
            </Swiper>

        </Fragment>
    );
};

export default CarrouselBanner;
