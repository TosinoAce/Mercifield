import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      {/* Desktop Navigation */}
      <nav className="navDesktop">
        <img src="/mercifield logo.png" alt="logo" />
        <div className="navigation">
          <ul>
            <Link to="/" onClick={closeMenu}>
              <li>Home</li>
            </Link>
            <Link to="/about" onClick={closeMenu}>
              <li>About Us</li>
            </Link>
            <a href="/#services" onClick={closeMenu}>
              <li>Services</li>
            </a>
            <Link to="/halls" onClick={closeMenu}>
              <li>Halls</li>
            </Link>
          </ul>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div>
            <div className="hamburger" onClick={toggleMenu}>
              <div className={menuOpen ? "bar rotate-bar1" : "bar"}></div>
              <div className={menuOpen ? "bar fade-bar" : "bar"}></div>
              <div className={menuOpen ? "bar rotate-bar2" : "bar"}></div>
            </div>
        {menuOpen && (
          <nav className="navMobile">
            <div className="mobileHeader">
              <img src="/mercifield logo.png" alt="brand Logo" />
              <h4>
                MERCI<span id="fi">FIELD</span> <span id="ev">Events Ltd</span>
              </h4>
            </div>
            <div>
              <ul>
                <Link to="/" onClick={closeMenu}>
                  <li>Home</li>
                </Link>
                <Link to="/about" onClick={closeMenu}>
                  <li>About Us</li>
                </Link>
                <a href="/#services" onClick={closeMenu}>
                  <li>Services</li>
                </a>
                <Link to="/halls" onClick={closeMenu}>
                  <li>Halls</li>
                </Link>
              </ul>
            </div>
            <Link to="/contact">
              <button onClick={closeMenu}>Contact Us</button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
