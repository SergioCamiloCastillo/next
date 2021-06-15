import "../styles/globals.css";
import "../components/Header/Header.scss";
import 'antd/dist/antd.css';
import "@fortawesome/fontawesome-svg-core/styles.css";

import Layout from "../Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
