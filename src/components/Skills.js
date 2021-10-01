import React from "react";

import * as styles from "../styles/Skills.module.scss";

const Skills = () => {
  return (
    <section id={styles.skills}>
      <div id="skills"></div>
      <h2>Skills</h2>
      <article>
        <h3>Technical Skills</h3>
        <span>HTML5</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>SASS</span>
        <span>React</span>
        <span>Java</span>
        <span>C/C++</span>
      </article>
      <article>
        <h3>Media Technology</h3>
        <span>Figma</span>
        <span>Adobe Photoshop</span>
        <span>Adobe Premiere Pro</span>
      </article>
    </section>
  );
};

export default Skills;
