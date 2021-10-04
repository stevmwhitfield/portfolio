import React from "react";
import { Link } from "gatsby";

import * as styles from "../styles/Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <nav id={styles.nav}>
        <ul>
          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              activeClassName={styles.active}
              to="/"
            >
              <i class="fas fa-home"></i>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              activeClassName={styles.active}
              to="/work"
            >
              <i class="fas fa-folder-open"></i>
              My Work
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              activeClassName={styles.active}
              to="/contact"
            >
              <i class="fas fa-envelope"></i>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <a
        className={styles.btn}
        href="https://github.com/stevmwhitfield"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </>
  );
};

export default Navigation;
