import React from "react";

import * as styles from "../styles/Card.module.scss";

const Card = ({ img, title, description, live, github }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} loading="lazy"/>
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{description}</p>
        <a
          className={styles.btnSolid}
          style={live === "" ? { visibility: "hidden" } : null}
          href={live}
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
        <a
          className={styles.btn}
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Card;
