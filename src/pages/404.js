import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import Layout from "../components/Layout";

const PageNotFound = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found | Steven Whitfield</title>
        <meta name="description" content="Error 404: Page not found." />
      </Helmet>
      <h1>Error 404</h1>
      <h2>Page not found.</h2>
      <Link to="/">Return to home.</Link>
    </Layout>
  );
};

export default PageNotFound;
