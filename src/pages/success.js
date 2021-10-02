import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

import Layout from "../components/Layout";
import Divider from "../components/Divider";

import * as styles from "../styles/success.module.scss";
import { navigate } from "gatsby-link";

const success = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/contact");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Success | Steven Whitfield</title>
      </Helmet>
      <div className={styles.container}>
        <h2>Successfully sent.</h2>
      </div>
      <Divider />
    </Layout>
  );
};

export default success;
