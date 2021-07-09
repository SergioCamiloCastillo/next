import React, { useState, useEffect, useContext } from "react";

import CarrouselBanner from "./CarrouselBanner";
const Homepage = (data) => {
   
    return (
        <>
            <div>

                {
                    data.children ?


                        data.children.body.map((component, index) =>
                            component.__component === "page.banner-principal" ? <CarrouselBanner key={index} data={component}></CarrouselBanner> : ''


                        )

                        : null

                }
            </div>
        </>
    );
}

export default Homepage;
