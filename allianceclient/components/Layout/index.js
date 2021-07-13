import { Fragment } from "react";

import Head  from "next/head";
/*Components*/
import HeaderComponent from "../Header";
import FooterComponent from "../Footer";


export default function Layout({ children }) {
  return (
   
    <Fragment>
       <Head>
         <title>Alliance Code</title>
       </Head>
      <HeaderComponent />
      <div class='content'>{children}</div>

      <FooterComponent />
    </Fragment>
  );
}
