import React from "react";
import Card from "./Card";

import * as styles from "../styles/Featured.module.scss";
import Img from "../assets/card-chawlamedia.png";

const Featured = () => {
  return (
    <section id={styles.featured}>
      <h2>Featured Work</h2>
      <div className={styles.cards}>
        <Card
          img={Img}
          title="Chawla Media"
          description="Designed in Figma, built with Gatsby and Strapi CMS, deployed to Netlify. This is the website for a small photography business located in Orlando, Florida."
          live="/#live"
          github="/#github"
        />
        <Card
          img={Img}
          title="Chawla Media"
          description="Designed in Figma, built with Gatsby and Strapi CMS, deployed to Netlify. This is the website for a small photography business located in Orlando, Florida."
          live="/#live"
          github="/#github"
        />
        <Card
          img={Img}
          title="Chawla Media"
          description="Designed in Figma, built with Gatsby and Strapi CMS, deployed to Netlify. This is the website for a small photography business located in Orlando, Florida."
          live="/#live"
          github="/#github"
        />
      </div>
    </section>
  );
};

export default Featured;
