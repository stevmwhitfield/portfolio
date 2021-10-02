import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import * as styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section id={styles.hero}>
      <h1>Steven Whitfield</h1>
      <h3>
        &lt; <span>Front End Developer</span> /&gt;
      </h3>
      <button onClick={() => scrollTo("#skills")}>
        <i class="fas fa-chevron-down"></i>
      </button>
    </section>
  );
};

export default Hero;
