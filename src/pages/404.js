import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Divider from "../components/Divider";
import * as styles from "../styles/404.module.scss";

const PageNotFound = () => {
  return (
    <Layout>
      <Helmet htmlAttributes={{lang: "en"}}>
        <meta charSet="utf-8" />
        <title>Page Not Found | Steven Whitfield</title>
        <meta name="description" content="Error 404: Page not found." />
      </Helmet>
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
