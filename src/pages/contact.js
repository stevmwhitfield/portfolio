import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Divider from "../components/Divider";
import Form from "../components/Form";
import * as styles from "../styles/contact.module.scss";

const ContactPage = () => {
  return (
    <Layout>
      <Helmet htmlAttributes={{lang: "en"}}>
        <meta charSet="utf-8" />
        <title>Contact Me | Steven Whitfield</title>
        <meta name="description" content="Get in touch." />
        <link
          rel="canonical"
          href="https://stevenwhitfield.netlify.app/contact"
        />
      </Helmet>
      <div id={styles.contact}>
        <h1>Contact Me</h1>
        <Form />
      </div>
      <Divider />
    </Layout>
  );
};

export default ContactPage;
