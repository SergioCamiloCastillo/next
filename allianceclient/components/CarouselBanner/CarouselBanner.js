import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BASE_PATH } from "../../utils/constants";
import { Animated } from "react-animated-css";
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';

const BgElement = Element.BgElement;

import Image from 'next/image'
import SwiperCore, {
  Navigation,
  EffectFade, Autoplay, Parallax, Pagination
} from 'swiper/core';
SwiperCore.use([Navigation, EffectFade, Autoplay, Parallax, Pagination]);

/*Styles*/
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

const CarrouselBanner = ({ items }) => {

  return (
    <Fragment>

      <BannerAnim thumbFloat={false} prefixCls="banner-thumb-bottom" duration={900}>

        {
          items ?
            items.map((component, index) => (
              <Element key="aaa"
                prefixCls="banner-user-elem"
              >
                <BgElement
                  key="bg"
                  className="bg"
                  style={{
                    backgroundImage: `url(http://localhost:1337${component.Imagen[0].url})`,
                  }}
                  scrollParallax={{ y: 100 }}
                />
                <TweenOne className='title-carousel' animation={{ y: 90, opacity: 0, type: 'from', delay: 300 }} name="TweenOne">
                  {component.TituloBanner}
                </TweenOne>
                <TweenOne className='description-carousel' animation={{ y: 50, opacity: 0, type: 'from', delay: 900 }} name="TweenOne2">
                  {component.Descripcion}
                </TweenOne>
              </Element>




            ))
            : 'Cargando...'
        }
      </BannerAnim>
    </Fragment>
  );
};

export default CarrouselBanner;