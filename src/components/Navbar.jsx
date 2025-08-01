import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <img src="/mercifield logo.png" alt="logo" />
      <div className="navigation">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About Us</li></Link>
          <a href="/#services"><li>Services</li></a>
          <Link to="/halls"><li>Halls</li></Link>
        </ul>
        <Link to="/contact"><button>Contact Us</button></Link>
      </div>
    </header>
  );
};

export default Navbar;
