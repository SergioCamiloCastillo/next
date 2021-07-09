import React, { useState, useEffect, useCallback } from "react";
import { Button, Carousel } from 'antd';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const CarrouselBanner = ({ data }) => {
    const [carrousel, setCarrousel] = useState({});
    useEffect(() => {
        const arrayMenu = [];
        arrayMenu.push(data.Titulo_Banner);
        setCarrousel(arrayMenu)
    }, []);
    console.log(data);
    return (
        <>
            <Carousel >
                {
                    Object.keys(carrousel).map((title, i) => {
                        return (
                            <div>
                                <h3 style={contentStyle}>{carrousel}</h3>
                            </div>
                        )
                    })
                }
            </Carousel>
        </>
    )



};

export default CarrouselBanner;
