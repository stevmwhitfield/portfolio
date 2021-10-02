import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const WorkPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Work | Steven Whitfield</title>
        <meta
          name="description"
          content="A collection of my works and projects."
        />
        <link rel="canonical" href="https://stevenwhitfield.netlify.app/work" />
      </Helmet>
      <h1>Work Page</h1>
    </Layout>
  );
};

export default WorkPage;
