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
        <title>Ingeniocode - Desarrollo Web</title>
<meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <meta
          name="description"
          content="Somos IngenioCode una empresa dedicada al desarrollo de sitios web."
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
   <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-YK3V02DL5Y" >
</script>
<script dangerouslySetInnerHTML={
    { __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "G-NHE0E3CM0K");
    `}
}>
</script>
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
