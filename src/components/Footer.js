import React from "react";

import * as styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div id={styles.about}>
        <h4>About Me</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          doloremque consectetur alias, tempore similique a cum perferendis
          mollitia natus voluptas assumenda voluptatibus in saepe.
        </p>
      </div>
      <div id={styles.social}>
        <a href="github.com" target="_blank">
          <i class="fab fa-github"></i>
          {/* GitHub */}
        </a>
        <a href="linkedin.com" target="_blank">
        <i class="fab fa-linkedin"></i>
          {/* LinkedIn */}
        </a>
        <a href="twitter.com" target="_blank">
        <i class="fab fa-twitter"></i>
          {/* Twitter */}
        </a>
      </div>
      <div id={styles.copyright}>
        <p>Copyright &copy; 2021. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
