import React from "react";
import RevealWrapper from "./RevealWrapper";
import { Link } from "react-router-dom";
import "./ActionCall.css";

const ActionCall = () => {
  return (
    <section className="Action">
      <RevealWrapper isStaggered>
        {[
          <h3>Ready to Create Your Perfect Event?</h3>,
          <h2>Let’s Make Your Event Unforgettable</h2>,
          <p>
            Whether you're planning a grand celebration or an intimate
            gathering, our team is ready to bring your dream event to life. Get
            in touch with us today to book a hall, request planning support, or
            add that special fruity touch to your occasion.
          </p>,
          <div className="btn">
            <Link to=""><button>Get Started</button></Link>
            <Link to="/about"><button id="explore">Learn  More</button></Link>
          </div>,
        ]}
      </RevealWrapper>
    </section>
  );
};

export default ActionCall;
