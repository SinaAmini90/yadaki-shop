import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Navbar.css";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <section className="navTop">
        <address>
          <FaPhone size={16} />
          <span
            style={{
              "border-right": "1px solid white",
              "padding-right": "15px",
            }}
          >
            09134237637
          </span>

          <FaEnvelope size={16} />
          <span>siyam1990@gmail.com</span>
        </address>
        <div className="social-medias">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={18} color="white" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={18} color="white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} color="white" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={18} color="white" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={18} color="white" />
          </a>
        </div>
      </section>
      <hr className="nav-hr" />
      <section className="navButtom">
        <div>
          <h1>Website Name</h1>
          <button onClick={toggleMenu}>
            <FaBars size={18} color="white" />
          </button>
        </div>
        <div
          className={"pages-nav"}
          style={{
            maxHeight: menuOpen || !isMobile ? "200px" : "0px",
          }}
        >
          <ul style={{ opacity: menuOpen || !isMobile ? "1" : "0" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
