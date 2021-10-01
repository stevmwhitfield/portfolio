import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">My Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
      <button>GitHub</button>
    </header>
  );
};

export default Header;
