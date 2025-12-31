import React, { useState } from "react";
import { motion } from "framer-motion";
import RevealWrapper from "./RevealWrapper";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.2002835503", email);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScgXrh54G5Y10hw22JFV6HVm3YTHmidfZcwKVnDYVixUBtvDg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );
      setSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Error submitting form", error);
    }

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <footer>
      <div>
        <RevealWrapper className="m-foot" isStaggered>
          {[
            <div key="col-1">
              <img src="/logo-full.png" alt="logo" id="footer-logo" />
              <p>
                Creating unforgettable moments through elegant halls,
                <br /> expert planning, and beautiful fruit displays. <br />
                Let’s bring your vision to life.
              </p>
              <div className="socials">
                <a
                  target="_blank"
                  href="https://www.facebook.com/share/MGuUhdu9eyVaeuzx/?mibextid=wwXIfr"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-facebook h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/mercifield_events?igsh=ZHF4eXlyOWE4NjJi"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-instagram h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@mercifield_events">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-tiktok"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </a>
              </div>
            </div>,

            <div key="col-2">
              <h2>Quick Links</h2>
              <ul id="link">
                <a href="/#services"><li>Services</li></a>
                <Link to="/halls">
                  <li>Halls</li>
                </Link>
                <Link to="/about">
                  <li>About Us</li>
                </Link>
                <Link to="/contact">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>,

            <div key="col-3">
              <h2>Legal</h2>
              <ul id="link2">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>,

            <div key="col-4">
              <h2>Subscribe to Newsletter</h2>
              <p>Subscribe to our newsletter for updates and special offers.</p>

              <form id="subscribe" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Subscribe
                </motion.button>
              </form>

              {submitted && (
                <motion.p
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </div>,
          ]}
        </RevealWrapper>
      </div>

      <RevealWrapper>
        <div id="sub-foot">
          © {new Date().getFullYear()} MerciFIELD Events. All rights reserved
        </div>
      </RevealWrapper>
    </footer>
  );
};

export default Footer;
