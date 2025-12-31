// src/components/Testimonials.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import RevealWrapper from "./RevealWrapper";

import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css"; // custom styling

const testimonials = [
  {
    image: "/petra.jpg",
    name: "Petra Church.",
    feedback:
      "Mercifield Events supported Petra Church during the Total Immersion Program with strong coordination and focus. The setup aligned with the purpose of the program and supported a calm and organized environment. Transitions between sessions stayed smooth and distraction free. Participants remained attentive and comfortable throughout the program. The team showed respect for the program structure and values. We are grateful for the support and delivery.",
  },
  {
    image: "/Zenith-Bank.webp",
    name: "Zenith Bank.",
    feedback:
      "Mercifield Events delivered a smooth and well organized end of year party for Zenith Bank. The planning showed clear structure from start to finish. The venue setup, timing, and coordination stayed on point throughout the event. Guests enjoyed the experience and engagement stayed high all through the night. The outcome met our expectations and reflected strong attention to detail. We appreciate the professionalism and commitment shown by the Mercifield Events team.",
  },
  {
    image: "/brownroof.jpg",
    name: "Brown Roof Party.",
    feedback:
      "Mercifield Events handled the Brown Roof Rave Party with precision and energy. The atmosphere matched the vision of the event perfectly. Sound, lighting, and crowd flow worked together without issues. Attendees responded positively and participation remained strong until the close of the event. The execution reflected solid planning and clear understanding of rave culture. We value the effort and results delivered.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <RevealWrapper>
        <h2 className="testimonial-heading">What Our Clients Say</h2>
      </RevealWrapper>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <RevealWrapper>
              <div className="testimonial-card">
                <img src={t.image} alt="" />
                <p className="testimonial-text">“{t.feedback}”</p>
                <h4 className="testimonial-name">— {t.name}</h4>
              </div>
            </RevealWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
