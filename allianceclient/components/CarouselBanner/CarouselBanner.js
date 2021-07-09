import React, { Fragment, useState, useEffect } from "react";
import { Button, Carousel } from "antd";
import Image from 'next/image'
/*Styles*/
const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

const CarrouselBanner = ({ items }) => {
    console.log("ITEMS->", items);

    return (
        <Fragment>
            <Carousel>
                {
                    items ?
                        items.map((component, index) => (
                            <div>
                                <h3 style={contentStyle}>{component.TituloBanner}</h3>
                                <img width={500} height={500} src={`http://localhost:1337${component.Imagen[0].url}`}></img>
                            </div>
                        ))
                        : ''
                }

            </Carousel>
        </Fragment>
    );
};

export default CarrouselBanner;
