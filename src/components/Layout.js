import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import * as styles from "../styles/Layout.module.scss";

const Layout = props => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
