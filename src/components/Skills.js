import React from "react";

import * as styles from "../styles/Skills.module.scss";

const Skills = () => {
  return (
    <section id={styles.skills}>
      <div id="skills"></div>
      <h2>Skills</h2>
      <div className={styles.flex}>
        <article>
          <h3>Technical Skills</h3>
          <div className={styles.icons}>
            <span>
              <i class="fab fa-html5"></i>
            </span>
            <span>
              <i class="fab fa-css3-alt"></i>
            </span>
            <span>
              <i class="fab fa-js-square"></i>
            </span>
            <span>
              <i class="fab fa-sass"></i>
            </span>
            <span>
              <i class="fab fa-react"></i>
            </span>
            <span>
              <i class="fab fa-java"></i>
            </span>
            <span>
              <i class="fab fa-cuttlefish"></i>
            </span>
          </div>
        </article>
        <article>
          <h3>Media Technology</h3>
          <div className={styles.icons}>
            <span>
              <i class="fab fa-figma"></i>
            </span>
            <span>
              <i class="fas fa-parking">{/* Change to Photoshop icon */}</i>
            </span>
            <span>
              <i class="fab fa-pied-piper-pp">
                {/* Change to Premiere Pro icon */}
              </i>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;
