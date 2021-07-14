import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BASE_PATH } from "../../utils/constants";

import Image from 'next/image'
import SwiperCore, {
    Navigation,
    EffectFade, Autoplay
} from 'swiper/core';
SwiperCore.use([Navigation, EffectFade, Autoplay]);

/*Styles*/
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";

const CarrouselBanner = ({ items }) => {
  
    return (
        <Fragment>
            <Swiper autoplay={{
                "delay": 18000,
                "disableOnInteraction": false
            }}  effect={'fade'} navigation={true} slidesPerView={1} spaceBetween={90} loop={true} className="mySwiper">

                {
                    items ?
                        items.map((component, index) => (

                            <SwiperSlide><div><Image width={1600}
                                height="1000" src={`${BASE_PATH}${component.Imagen[0].url}`} />
                                <p>{component.TituloBanner}</p></div>
                            </SwiperSlide>

                        ))
                        : 'Cargando...'
                }
            </Swiper>

        </Fragment>
    );
};

export default CarrouselBanner;
