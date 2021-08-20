import { useState, useEffect } from "react";
/* URL ESTATICA */
import { BASE_PATH } from "../utils/constants";
/*Context*/
import AppContext from "../context/AppContext";


const APIBANNERCARROUSEL = `http://142.93.123.131:1337/home-carrousel-banners`;
const APINUESTROSSERVICIOS = `${BASE_PATH}/nuestros-servicios`;
const APITITULONUESTROSSERVICIOS = `${BASE_PATH}/home-nuestros-servicios-titulo-descripcions`;
const APIPORQUEESCOGERNOS = `${BASE_PATH}/porque-escogernos`;
const APITECNOLOGIAS = `${BASE_PATH}/tecnologias`;
const APIDISCUTAMOS = `${BASE_PATH}/discutamos-tu-ideas`;
const APIPRECIOS = `${BASE_PATH}/precios`;
const APICONTACTO = `${BASE_PATH}/contactos`;


function ContextWrapper({ children }) {
    const [state, setState] = useState([]);
    const [tituloNuestrosServicios, setTituloNuestrosServicios] = useState([]);
    const [porqueEscogernos, setPorqueEscogernos] = useState([]);
    const [nuestrosServicios, setNuestrosServicios] = useState([]);
    const [tecnologias, setTecnologias] = useState([]);
    const [discutamos, setDiscutamos] = useState([]);
    const [precios, setPrecios] = useState([]);
    const [contacto, setContacto] = useState([]);


    useEffect(async () => {

        /*Get data Banner Carrousel*/
        const response = await fetch(APIBANNERCARROUSEL);
        const json = await response.json();
        setState(json);

        /*Get data Title and description Nuestros Servicios*/
        const responseTituloNuestrosServicios = await fetch(APITITULONUESTROSSERVICIOS);
        const jsonTituloNuestrosServicios = await responseTituloNuestrosServicios.json();
        setTituloNuestrosServicios(jsonTituloNuestrosServicios);

        /*Get data Our Services*/
        const responseNuestrosServicios = await fetch(APINUESTROSSERVICIOS);
        const jsonNuestrosServicios = await responseNuestrosServicios.json();
        setNuestrosServicios(jsonNuestrosServicios);
        
        /*Get data Why Choose us*/
        const responsePorqueEscogernos = await fetch(APIPORQUEESCOGERNOS);
        const jsonPorqueEscogernos= await responsePorqueEscogernos.json();
        setPorqueEscogernos(jsonPorqueEscogernos);

        /*Get data Tecnologies*/
        const responseTecnologias = await fetch(APITECNOLOGIAS);
        const jsonTecnologias= await responseTecnologias.json();
        setTecnologias(jsonTecnologias);

         /*Get data Discutamos tus ideas*/
         const responseDiscutamos = await fetch(APIDISCUTAMOS);
         const jsonDiscutamos= await responseDiscutamos.json();
         setDiscutamos(jsonDiscutamos);

          /*Get data Precios*/
          const responsePrecios = await fetch(APIPRECIOS);
          const jsonPrecios= await responsePrecios.json();
          setPrecios(jsonPrecios);
          /*Get data Contacto*/
          const responseContacto = await fetch(APICONTACTO);
          const jsonContacto= await responseContacto.json();
          setContacto(jsonContacto);

    }, []);

    return (
        <AppContext.Provider value={{contacto, discutamos, precios, tecnologias, state, nuestrosServicios,tituloNuestrosServicios, porqueEscogernos }}>
            {children}
        </AppContext.Provider>
    );
}

export default ContextWrapper;
