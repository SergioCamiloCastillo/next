import { useState, useEffect } from "react";
/* URL ESTATICA */
import { BASE_PATH } from "../utils/constants";
/*Context*/
import AppContext from "../context/AppContext";


const APIBANNERCARROUSEL = `${BASE_PATH}/home-carrousel-banners`;
const APINUESTROSSERVICIOS = `${BASE_PATH}/nuestros-servicios`;

function ContextWrapper({ children }) {
    const [state, setState] = useState([]);
    const [nuestrosServicios, setNuestrosServicios] = useState([]);


    useEffect(async () => {

        /*Get data Banner Carrousel*/
        const response = await fetch(APIBANNERCARROUSEL);
        const json = await response.json();
        setState(json);

        /*Get data Our Services*/
        const responseNuestrosServicios = await fetch(APINUESTROSSERVICIOS);
        const jsonNuestrosServicios = await responseNuestrosServicios.json();
        setNuestrosServicios(jsonNuestrosServicios);


    }, []);

    return (
        <AppContext.Provider value={{ state, nuestrosServicios }}>
            {children}
        </AppContext.Provider>
    );
}

export default ContextWrapper;