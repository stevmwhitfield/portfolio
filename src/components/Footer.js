import React from "react";

import * as styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div id={styles.about}>
        <h4>About Me</h4>
        <p>
          My passion for development started in middle school. I had just
          discovered what programming was and jumped head-first into C++.
          Needless to say I was intimidated and soon switched to Python to learn
          the basics.
        </p>
        <p>
          When I'm not coding, you might find me playing video games with
          friends or learning a new musical piece on my keyboard.
        </p>
      </div>
      <div id={styles.social}>
        <a
          href="https://github.com/stevmwhitfield"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/stevenmwhitfield/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/stevmwhitfield"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <div id={styles.copyright}>
        <p>Copyright &copy; 2021. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
