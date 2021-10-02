import React from "react";
import Card from "./Card";

import { cards } from "../data/cards";
import * as styles from "../styles/Featured.module.scss";

const Featured = () => {
  const featuredCards = cards.slice(0, 3);
  return (
    <section id={styles.featured}>
      <h2>Featured Work</h2>
      <div className={styles.cards}>
        {featuredCards.map((card, index) => {
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
    </section>
  );
};

export default Featured;
