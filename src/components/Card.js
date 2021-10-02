import React from "react";

import * as styles from "../styles/Card.module.scss";

const Card = ({ img, title, description, live, github }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} />
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{description}</p>
        <a className={styles.btnSolid} href={live}>
          Live Site
        </a>
        <a className={styles.btn} href={github}>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Card;
