import { useContext } from "react";

/*Context*/
import AppContext from "../context/AppContext";
import Head from "next/head";

/*Containers*/
import HomeContainer from "@/containers/HomeContainer";

const Home = () => {
  const {
    contacto,
    state,
    nuestrosServicios,
    tituloNuestrosServicios,
    porqueEscogernos,
    tecnologias,
    discutamos,
    precios,
    preciosDescripcion,
  } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>IngenioCode - Desarrollo Web</title>
        <meta
          name="description"
          content="Somos IngenioCode, una empresa dedicada al desarrollo de sitios web."
        />
        <meta
          property="og:title"
          content="Desarrollo de sitios web"
        />
        <meta
          property="og:description"
          content="Animate de ser parte de nosotros, crea un sitio web con nosotros."
        />
        <meta property="og:url" content="https://snipcart.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <HomeContainer
        contacto={contacto}
        precios={precios}
        tecnologias={tecnologias}
        porqueEscogernos={porqueEscogernos}
        data={state}
        nuestrosServicios={nuestrosServicios}
        tituloNuestrosServicios={tituloNuestrosServicios}
        discutamos={discutamos}
      />
    </>
  );
};

export default Home;
