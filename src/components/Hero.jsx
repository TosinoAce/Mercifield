import React from "react";
import RevealWrapper from "./RevealWrapper";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="Hero">
      <img src="/logo-full.png" alt="logo" id="logo" />
      <RevealWrapper isStaggered>
        {[
          <div>
            <h1>Crafting Unforgettable Moments,<br />One Event at a Time</h1>
          </div>,
          <div>
            <p>
              From elegant hall rentals to flawless event planning and stunning
              fruit displays,
              <br /> we bring your celebrations to life with ease and
              excellence.
            </p>
          </div>,
          <div className="Callbtn">
            <Link to="/contact"><button id="book">Book a Hall</button></Link>
            <a href="/#services"><button>Explore Services</button></a>
          </div>,
        ]}
      </RevealWrapper>
    </section>
  );
};

export default Hero;
