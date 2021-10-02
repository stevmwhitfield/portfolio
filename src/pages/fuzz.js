import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Me | Steven Whitfield</title>
        <meta name="description" content="Get in touch." />
        {/* <link rel="canonical" href="https://stevenwhitfield.netlify.app/contact" /> */}
      </Helmet>
      <h1>Contact Page</h1>
    </Layout>
  );
};

export default ContactPage;
