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
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Work | Steven Whitfield</title>
        <meta
          name="description"
          content="A collection of my works and projects."
        />
        <link rel="canonical" href="https://stevenwhitfield.netlify.app/work" />
      </Helmet>
      <div id={styles.work}>
        <h2>My Work</h2>
        <div className={styles.cards}>
          {cards.map(card => {
            const { img, title, description, live, github } = card;
            return (
              <Card
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
