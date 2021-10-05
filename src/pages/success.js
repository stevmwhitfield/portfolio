import React from "react";
import { useEffect } from "react";

import Layout from "../components/Layout";
import Divider from "../components/Divider";
import Head from "../components/Head";
import * as styles from "../styles/success.module.scss";
import { navigate } from "gatsby-link";

const SuccessPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/contact");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Head
        title="Form Success | Steven Whitfield"
        description=""
        url="https://www.stevenwhitfield.live/success"
      />
      <div className={styles.container}>
        <h1>Successfully sent.</h1>
      </div>
      <Divider />
    </Layout>
  );
};

export default SuccessPage;
