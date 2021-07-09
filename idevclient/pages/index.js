import styles from "../styles/Home.module.css";
import { CountProvider, useCount } from "../Context/HomepageContext";
import Homepage from "../components/Homepage";
export default function Home() {
  const { data} = useCount();
  return (
  
      <Homepage>{data}</Homepage>

  );
}

Home.provider = CountProvider;