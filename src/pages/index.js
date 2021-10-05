import React from "react";

import Layout from "../components/Layout";
import Head from "../components/Head";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Featured from "../components/Featured";
import Divider from "../components/Divider";

const HomePage = () => {
  return (
    <Layout>
      <Head
        title="Steven Whitfield - Front End Developer"
        description="Steven Whitfield is a software developer specializing in front-end web development."
        url="https://www.stevenwhitfield.live/"
      />
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
