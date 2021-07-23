import { useContext } from 'react'

/*Context*/
import AppContext from "../context/AppContext";

/*Containers*/
import HomeContainer from "@/containers/HomeContainer";


const Home = () => {
  const { state, nuestrosServicios, tituloNuestrosServicios, porqueEscogernos, tecnologias } = useContext(AppContext);

  return (
    <HomeContainer tecnologias={tecnologias} porqueEscogernos={porqueEscogernos} data={state} nuestrosServicios={ nuestrosServicios } tituloNuestrosServicios={tituloNuestrosServicios} />

  )
}

export default Home