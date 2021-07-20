import { useContext } from 'react'

/*Context*/
import AppContext from "../context/AppContext";

/*Containers*/
import HomeContainer from "@/containers/HomeContainer";


const Home = () => {
  const { state, nuestrosServicios, tituloNuestrosServicios, porqueEscogernos } = useContext(AppContext);

  return (
    <HomeContainer porqueEscogernos={porqueEscogernos} data={state} nuestrosServicios={ nuestrosServicios } tituloNuestrosServicios={tituloNuestrosServicios} />

  )
}

export default Home