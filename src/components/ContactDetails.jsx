import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactDetails.css";
import { Link } from "react-router-dom";

const ContactDetails = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8t1hvom", // your service ID
        "template_47o8lz6", // your template ID
        form.current,
        "vris0xm7VHDmNzXKM" // your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          setError(null);
          form.current.reset();

          setTimeout(() => {
            setMessageSent(false);
          }, 4000);
        },
        (error) => {
          console.log(error.text);
          setError("Message failed to send. Please try again.");
        }
      );
  };

  return (
    <section id="contact-details">
      <h2>Contact our team</h2>
      <p>
        Would you like to rent a Hall or you got any questions about our
        services? We're here to help. Chat with our friendly team 24/7 and get
        onboard in less than 5 minutes.
      </p>

      <div id="contact-container">
        <div>
          <form id="c-form" ref={form} onSubmit={sendEmail}>
            <div id="name-section">
              <div>
                <p>First Name</p>
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="John"
                />
              </div>
              <div>
                <p>Last Name</p>
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="Doe"
                />
              </div>
            </div>

            <p>Email Address</p>
            <input
              type="email"
              name="user_email"
              required
              placeholder="example@gmail.com"
            />

            <p>Phone Number</p>
            <input type="tel" name="phone" placeholder="+234 812342157" />

            <p>Message</p>
            <textarea
              name="message"
              required
              placeholder="Leave us a message"
            ></textarea>

            <br />
            <button type="submit">Send Message</button>

            {messageSent && (
              <p className="success-message">✅ Message sent successfully!</p>
            )}
            {error && <p className="error-message">❌ {error}</p>}
          </form>
        </div>

        <div id="contact-link-container">
          <h3>Follow Us</h3>
          <p>Connect with us on our social media platforms</p>
          <div id="contact-socials">
            <Link to="https://web.facebook.com/people/Mercifield-Fruities/100063911060466/">
              <div>
                <img src="/facebook.svg" alt="Facebook" />
                <p>Facebook</p>
              </div>
            </Link>
            <Link to="https://www.instagram.com/mercifield_event_place/">
              <div>
                <img src="/instagram.svg" alt="Instagram" />
                <p>Instagram</p>
              </div>
            </Link>
            <Link to="https://www.tiktok.com/@mercifield_events">
              <div>
                <img src="/icons8-tiktok-logo-48.png" alt="Tiktok" />
                <p>Tiktok</p>
              </div>
            </Link>
          </div>

          <h3>Address</h3>
          <p>
            23 Stone Road, Agbarico, Opposite FRSC, Onireke Ibadan, Oyo State
          </p>

          <h3>Call Us</h3>
          <p>+(234) 809-181-2181</p>

          <h3>Email</h3>
          <p>mercifieldentofficial@gmail.com</p>

          <h3>Business Hours</h3>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
