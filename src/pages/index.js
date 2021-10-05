import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Featured from "../components/Featured";
import Divider from "../components/Divider";

const HomePage = () => {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Steven Whitfield is a software developer specializing in front-end web development."
        />
        <link rel="canonical" href="https://stevenwhitfield.netlify.app" />
        <title>Steven Whitfield</title>
      </Helmet>
      <Hero />
      <Divider />
      <Featured />
      <Divider />
      <Skills />
      <Divider />
    </Layout>
  );
};

export default HomePage;
