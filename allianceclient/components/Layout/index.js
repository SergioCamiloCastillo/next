import { Fragment } from "react";

/*Components*/
import HeaderComponent from "../Header";
import FooterComponent from "../Footer";

export default function Layout({ children }) {
  return (
    <Fragment>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Fragment>
  );
}
