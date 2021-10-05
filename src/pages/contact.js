import React from "react";

import Layout from "../components/Layout";
import Head from "../components/Head";
import Divider from "../components/Divider";
import Form from "../components/Form";
import * as styles from "../styles/contact.module.scss";

const ContactPage = () => {
  return (
    <Layout>
      <Head
        title="Contact Me | Steven Whitfield"
        description="Get in touch."
        url="https://www.stevenwhitfield.live/contact"
      />
      <div id={styles.contact}>
        <h1>Contact Me</h1>
        <Form />
      </div>
      <Divider />
    </Layout>
  );
};

export default ContactPage;
