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
            }} setTranslate={8000} style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} parallax={true} effect={'fade'} navigation={true} slidesPerView={1} loop={true} spaceBetween={90} pagination={{ "clickable": true }} className="mySwiper carousel">

                {
                    items ?
                        items.map((component, index) => (
                            <SwiperSlide>
                                <Image width={1600}
                                    height="1000" src={`${BASE_PATH}${component.Imagen[0].url}`} />
                                <div className='container'>
                                    <div className='carousel__title'>{component.TituloBanner}</div>

                                </div>
                            </SwiperSlide>



                        ))
                        : 'Cargando...'
                }
            </Swiper>

        </Fragment>
    );
};

export default CarrouselBanner;
