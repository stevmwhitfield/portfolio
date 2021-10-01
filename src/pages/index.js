import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Featured from "../components/Featured";
import Divider from "../components/Divider";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <Featured />
      <Divider />
    </Layout>
  );
};

export default HomePage;
