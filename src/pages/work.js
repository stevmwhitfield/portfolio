import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Divider from "../components/Divider";
import Card from "../components/Card";
import { cards } from "../data/cards";

import * as styles from "../styles/work.module.scss";

const WorkPage = () => {
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
        <meta
          name="description"
          content="A collection of my works and projects."
        />
        <link rel="canonical" href="https://stevenwhitfield.netlify.app/work" />
        <title>My Work | Steven Whitfield</title>
      </Helmet>
      <div id={styles.work}>
        <h1>My Work</h1>
        <div className={styles.cards}>
          {cards.map((card, index) => {
            const { img, title, description, live, github } = card;
            return (
              <Card
                key={index}
                img={img}
                title={title}
                description={description}
                live={live}
                github={github}
              />
            );
          })}
        </div>
      </div>
      <Divider />
    </Layout>
  );
};

export default WorkPage;
