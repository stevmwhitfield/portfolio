import React from "react";

const Card = ({ img, title, description, live, github }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={live}>Live Demo</a>
      <a href={github}>GitHub</a>
    </div>
  );
};

export default Card;
