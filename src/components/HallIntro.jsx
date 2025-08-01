import React from "react";
import RevealWrapper from "./RevealWrapper";
import {
  FaExpandArrowsAlt,
  FaSnowflake,
  FaPowerOff,
  FaPaintRoller,
  FaRestroom,
  FaParking,
  FaShieldAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./HallIntro.css";

const HallIntro = () => {
  return (
    <section className="introHall">
      <h2>Our <span>Premium</span> Event Halls</h2>
      <p>
        Welcome to Mercifield Hall – Where Moments Turn Into Memories. <br />{" "}
        Our elegant, spacious hall is designed to bring your events to life —
        whether it’s a wedding, birthday, corporate function, or special
        celebration. With a versatile layout, modern amenities, and a warm,
        inviting atmosphere, Mercifield Hall offers the perfect backdrop for
        unforgettable gatherings. Let’s create magic together, one celebration
        at a time.
      </p>
      <div className="features">
        <div className="feature-card">
          <FaExpandArrowsAlt className="feature-icon" />
          <h3>Spacious & Elegant Interiors</h3>
          <p>
            Designed to impress, our hall offers a refined, open space perfect
            for any event—whether it's a wedding, party, or corporate function.
          </p>
        </div>

        <div className="feature-card">
          <FaSnowflake className="feature-icon" />
          <h3>Fully Air-Conditioned</h3>
          <p>
            Comfort is key. Our entire space is air-conditioned to keep your
            guests cool and relaxed no matter the weather outside.
          </p>
        </div>

        <div className="feature-card">
          <FaPowerOff className="feature-icon" />
          <h3>Power Backup</h3>
          <p>
            With our standby generator, your event continues seamlessly without
            interruptions—even during unexpected power outages.
          </p>
        </div>

        <div className="feature-card">
          <FaPaintRoller className="feature-icon" />
          <h3>Decor Ready & Customizable</h3>
          <p>
            Our space is a blank canvas. Whether you’re going traditional,
            minimal, or extravagant, the hall is yours to transform.
          </p>
        </div>

        <div className="feature-card">
          <FaRestroom className="feature-icon" />
          <h3>Changing Room & Rest Rooms</h3>
          <p>
            We offer clean, private changing areas and modern restrooms to
            ensure guests are comfortable throughout the event.
          </p>
        </div>

        <div className="feature-card">
          <FaParking className="feature-icon" />
          <h3>Ample Parking Space</h3>
          <p>
            No stress, no hassle. There's plenty of secure parking for you and
            your guests right within the premises.
          </p>
        </div>

        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>24/7 Security</h3>
          <p>
            Your safety is our priority. Our facility is monitored and secured
            round the clock to give you peace of mind.
          </p>
        </div>

        <div className="feature-card">
          <FaMapMarkerAlt className="feature-icon" />
          <h3>Accessible Location</h3>
          <p>
            Located in a central, easy-to-find area, our hall is conveniently
            reachable for all your guests—near or far.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HallIntro;
