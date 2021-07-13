import "../styles/globals.css";
import 'antd/dist/antd.css';
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Carousel } from 'antd';

const Noop = ({ children }) => <>{children}</>;

import Layout from "../Layout";
function MyApp({ Component, pageProps }) {
  const ContextProvider = Component.provider || Noop;

  return (
    <Layout>
      <ContextProvider><Component {...pageProps} />
      </ContextProvider>

    </Layout>
  );
}

export default MyApp;
