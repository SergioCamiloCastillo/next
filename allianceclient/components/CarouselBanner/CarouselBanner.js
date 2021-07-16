import React, { Fragment, useEffect } from "react";
import { Button } from "antd";
import Link from "next/link";
import QueueAnim from 'rc-queue-anim';

import 'rc-banner-anim/assets/index.css';
import TweenOne from 'rc-tween-one';
import BannerAnim, { Element , OverPack} from 'rc-banner-anim';
import Texty from 'rc-texty';

const BgElement = Element.BgElement;

/*Styles*/

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-animated-slider/build/horizontal.css";

const CarrouselBanner = ({ items }) => {
  return (
    <Fragment>
  <BannerAnim  duration={1000}
  
      autoPlaySpeed={9000} 
        prefixCls="banner-user-elem"
       
      >{   items ?
        items.map((component, index) => (
        <Element className='carousel' key={index}
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(http://localhost:1337${component.Imagen[0].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className='container banner'>
          <TweenOne className="banner-user-title carousel__title" animation={{ y: 30, opacity: 0, type: 'from', delay: 200 }}>
            {component.TituloBanner}
          </TweenOne>
          <Texty component={TweenOne}
              
            className="banner-user-text carousel__description" 
            animation={{ y: 30, opacity: 0, type: 'from', delay:10 }}
          ></Texty>
            <TweenOne className="banner-user-text carousel__description" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 400 }}
          > {component.Descripcion}</TweenOne>
            <TweenOne 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 500 }}
            align='left'
          > 
                   <Button className='carousel__btn-carousel'><Link href={component.Enlace}>{component.TituloBoton}</Link></Button>

                   </TweenOne>
       
            </div>
         
        </Element>
        ))
        : 'Cargando...'
    }
      </BannerAnim>
    </Fragment>
  );
};


export default CarrouselBanner;
