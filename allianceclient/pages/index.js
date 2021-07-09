import { useContext } from 'react'

/*Context*/
import AppContext from "../context/AppContext";

/*Containers*/
import HomeContainer from "@/containers/HomeContainer";

const Home = () => {
  const { state } = useContext(AppContext);

  return (
    <HomeContainer data={state} />
  )
}

export default Home