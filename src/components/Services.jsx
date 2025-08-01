import React from "react";
import RevealWrapper from "./RevealWrapper";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <RevealWrapper>
        <h2>
          Our <span>Services</span>
        </h2>
        <p>
          From intimate gatherings to grand celebrations, we bring your vision
          to life with elegance and style.
        </p>
      </RevealWrapper>
      <RevealWrapper>
        <div className="servicesContainer">
          <div id="planning">
            <h3>Event Planning</h3>
            <p>
              We offer end-to-end event planning tailored to your unique needs.
              From the initial concept and venue selection to guest
              coordination, logistics, and on-the-day execution — we ensure
              every detail is handled with care and precision so you can enjoy a
              stress-free and memorable event
            </p>
          </div>
          <div id="fruit">
            <h3>Fruit Design & Catering Services</h3>
            <p>
              Our fruit design and catering service combines aesthetics with
              flavor. We create captivating fruit displays that add color and
              vibrancy to your event, paired with delicious meals and
              refreshments that leave a lasting impression on your guests. Every
              spread is designed to match your event’s theme and standardf
            </p>
          </div>
          <div id="entertain">
            <h3>Entertainments</h3>
            <p>
              We curate a vibrant atmosphere through quality entertainment.
              Whether you're looking for energetic live bands, engaging DJs,
              cultural acts, or charismatic MCs, we connect you with top talents
              who know how to keep your guests entertained and the energy high
              from start to finish.
            </p>
          </div>
          <div id="rental">
            <h3>Rentals</h3>
            <p>
              Our rental service provides stylish, high-quality event essentials
              — including chairs, tables, tents, lighting, audio systems, and
              themed décor. We ensure that your venue is not only functional but
              also visually stunning, tailored to suit the mood and scale of
              your occasion
            </p>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
};

export default Services;
