import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Divider from "../components/Divider";
import Form from "../components/Form";
import * as styles from "../styles/contact.module.scss";

const ContactPage = () => {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FSFHWRXFL2"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-FSFHWRXFL2');
        </script>
        <meta name="description" content="Get in touch." />
        <link
          rel="canonical"
          href="https://stevenwhitfield.netlify.app/contact"
        />
        <title>Contact Me | Steven Whitfield</title>
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
