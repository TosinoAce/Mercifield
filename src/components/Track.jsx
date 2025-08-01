import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import RevealWrapper from "./RevealWrapper";
import useCountUp from "./CountUp";
import "./Track.css";

const Track = () => {
  const statRef = useRef(null);
  const isInView = useInView(statRef, { once: true, margin: "-100px" });

  const events = useCountUp(500, 2000, isInView);
  const clients = useCountUp(1000, 2000, isInView);
  const team = useCountUp(25, 2000, isInView);
  const years = useCountUp(10, 2000, isInView);
  return (
    <section className="track">
      <RevealWrapper isStaggered>
        {[
          <h2>
            Why <span>Choose</span> Us?
          </h2>,
          <p>Because Your Events Deserve the Best</p>,
        ]}
      </RevealWrapper>
      <div className="features">
        <RevealWrapper>
          <div className="featureCard">
            <div>
              <img src="/icons8-city-hall-64.png" alt="" />
            </div>
            <h3>Elegant & Spacious Halls</h3>
            <p>
              Our event halls are designed with elegance, comfort, and
              flexibility in mind. Whether you're hosting a wedding, birthday,
              corporate function, or church event, our spacious interiors
              provide the perfect canvas to create lasting memories.
            </p>
          </div>
        </RevealWrapper>
        <RevealWrapper>
          <div className="featureCard">
            <div>
              <img src="/icons8-professional-50.png" alt="" />
            </div>
            <h3>Professional Event Planning</h3>
            <p>
              With a passionate and experienced team, we take the stress out of
              your planning process. From ideation to execution, we work closely
              with you to ensure every detail reflects your unique taste and
              exceeds expectations.
            </p>
          </div>
        </RevealWrapper>
        <RevealWrapper>
          <div className="featureCard">
            <div>
              <img src="/icons8-group-of-fruits-64.png" alt="" />
            </div>
            <h3>Stunning Fruit Displays</h3>
            <p>
              Our beautifully crafted fruit displays do more than satisfy
              appetites — they add color, style, and a refreshing touch to your
              event. Each arrangement is thoughtfully curated to delight your
              guests and enhance your decor.
            </p>
          </div>
        </RevealWrapper>
        <RevealWrapper>
          <div className="featureCard">
            <div>
              <img src="/icons8-affordable-64 (1).png" alt="" />
            </div>
            <h3>Affordable Packages</h3>
            <p>
              We believe premium event experiences should be accessible. That’s
              why we offer flexible, value-packed packages that deliver
              top-notch service without stretching your budget.
            </p>
          </div>
        </RevealWrapper>
      </div>

      <div className="stats" ref={statRef}>
        <RevealWrapper>
          <div className="stat-card">
            <span>{events}+</span>
            <br /> Events Organized
          </div>
        </RevealWrapper>
        <RevealWrapper>
          <div className="stat-card">
            <span>{clients}+</span>
            <br /> Happy Clients
          </div>
        </RevealWrapper>
        <RevealWrapper>
          <div className="stat-card">
            <span>{years}+</span>
            <br /> Years of Experience
          </div>
        </RevealWrapper>
        <RevealWrapper>
          <div className="stat-card">
            <span>{team}+</span>
            <br /> Team Members
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default Track;
