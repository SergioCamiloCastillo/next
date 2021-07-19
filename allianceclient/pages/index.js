import { useContext } from 'react'

/*Context*/
import AppContext from "../context/AppContext";

/*Containers*/
import HomeContainer from "@/containers/HomeContainer";


const Home = () => {
  const { state, nuestrosServicios } = useContext(AppContext);

  return (
    <HomeContainer data={state} nuestrosServicios={ nuestrosServicios }/>

  )
}

export default Home