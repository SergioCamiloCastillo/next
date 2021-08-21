import React from "react";
import PropTypes from "prop-types";
import "../scss/globals.scss";

/*Context*/
import ContextWrapper from "../components/ContextWrapper";


/*Components*/
import Layout from "@/components/Layout";

/*Styles*/
import "../styles/globals.css";
import 'antd/dist/antd.css';
import "@fortawesome/fontawesome-svg-core/styles.css";

import Head from "next/head";

export default function MyApp(props) {

  const { Component, pageProps } = props;

  return (
    <>
 <Head>
        <title>Atomicos - Desarrollo Web</title>

        <meta
          name="description"
          content="Somos una empresa dedicada al desarrollo de sitios web."
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
      <ContextWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextWrapper>
    </>
     
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
