import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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

const Navbar: React.FC<any> = () => {
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
          <span className="nav-phone-number">09134237637</span>

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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-active" : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "nav-active" : undefined
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? "nav-active" : undefined
                }
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "nav-active" : undefined
                }
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
