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
    image: "/testimonial.avif",
    name: "Sarah O.",
    feedback:
      "Working with this team was a dream come true. They took all the pressure off my shoulders and made planning our wedding seamless. Every vendor they recommended was professional, and the coordination on the event day was impeccable. I felt like a guest at my own event — and that’s the best feeling",
  },
  {
    image: "/testimonial.avif",
    name: "James T.",
    feedback:
      "This company MerciField made my 50th birthday celebration unforgettable! They understood my style perfectly, from the elegant flower arrangements to the vibrant entertainment lineup. Every little touch felt so personal. Thank you for making me feel so celebrated",
  },
  {
    image: "/testimonial.avif",
    name: "Amaka U.",
    feedback:
      "I loved how the planning team remained calm and responsive even when we had last-minute changes. Their creativity, flexibility, and commitment made the event feel effortless. Everyone kept asking, ‘Who planned this?!’ I’m proud to say it was this amazing team!",
  },
  {
    image: "/testimonial.avif",
    name: "Amaka U.",
    feedback:
      "I cannot recommend this event company enough! From the very first consultation, they listened closely to my ideas and brought them to life in ways I couldn’t have imagined. The decor, organization, and attention to detail were all flawless. My guests are still talking about how amazing the evening was!",
  },
  {
    image: "/testimonial.avif",
    name: "Ademola Omola",
    feedback:
      "As a corporate client, I’ve worked with several event organizers, but none compare to the professionalism and creativity of this company. Our annual gala was elevated beyond expectations, with smooth logistics and stunning visual presentation. We’ve already booked them for next year",
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
