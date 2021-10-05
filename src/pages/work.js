import React from "react";

import Layout from "../components/Layout";
import Head from "../components/Head";
import Divider from "../components/Divider";
import Card from "../components/Card";
import { cards } from "../data/cards";

import * as styles from "../styles/work.module.scss";

const WorkPage = () => {
  return (
    <Layout>
      <Head
        title="My Work | Steven Whitfield"
        description="A collection of my works and projects."
        url="https://stevenwhitfield.live/work"
      />
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
