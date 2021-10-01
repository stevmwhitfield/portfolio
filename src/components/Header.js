import React from "react";
import Navigation from "./Navigation";

import * as styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header id={styles.header}>
      <Navigation />
    </header>
  );
};

export default Header;
