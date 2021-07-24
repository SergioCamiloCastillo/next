import { useContext } from 'react'

/*Context*/
import AppContext from "../context/AppContext";

/*Containers*/
import HomeContainer from "@/containers/HomeContainer";


const Home = () => {
  const { state, nuestrosServicios, tituloNuestrosServicios, porqueEscogernos, tecnologias, discutamos } = useContext(AppContext);

  return (
    <HomeContainer tecnologias={tecnologias} porqueEscogernos={porqueEscogernos} data={state} nuestrosServicios={ nuestrosServicios } tituloNuestrosServicios={tituloNuestrosServicios} discutamos={discutamos} />

  )
}

export default Home