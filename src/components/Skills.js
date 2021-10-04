import React from "react";

import * as styles from "../styles/Skills.module.scss";

const Skills = () => {
  return (
    <section id={styles.skills}>
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
              <img
                className={styles.icon}
                src="https://res.cloudinary.com/dhzjdelhw/image/upload/v1633220823/Portfolio/AdobePhotoshopCC_icon_ns2qxz.svg"
                alt="Adobe Photoshop icon"
              />
            </span>
            <span>
              <img
                className={styles.icon}
                src="https://res.cloudinary.com/dhzjdelhw/image/upload/v1633220823/Portfolio/AdobePremiereProCC_icon_axgcuv.svg"
                alt="Adobe Premiere Pro icon"
              />
            </span>
            <span>
              <i class="fab fa-figma"></i>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;
