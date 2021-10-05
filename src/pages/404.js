import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Head from "../components/Head";
import Divider from "../components/Divider";
import * as styles from "../styles/404.module.scss";

const PageNotFound = () => {
  return (
    <Layout>
      <Head
        title="Page Not Found | Steven Whitfield"
        description="Error 404: Page not found."
        url="https://www.stevenwhitfield.live/404"
      />
      <div className={styles.container}>
        <h1>Error 404</h1>
        <h3>Page not found.</h3>
        <Link to="/">Return to home</Link>
      </div>
      <Divider />
    </Layout>
  );
};

export default PageNotFound;
