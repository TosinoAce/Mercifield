import React from "react";
import "./AutoScrollCarousel.css";

const images = [
  "/rentals.jpg",
  "/planning.jpg",
  "/fruit.jpg",
  "/entertainments.jpg",
  "/planning.jpg", // Repeating helps with seamless scroll illusion
  "/rentals.jpg",
];

const AutoScrollCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {[...images, ...images].map((src, index) => (
          <img src={src} alt={`hall-${index}`} key={index} className="carousel-img" />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollCarousel;
