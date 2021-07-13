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

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
      <ContextWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextWrapper>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};