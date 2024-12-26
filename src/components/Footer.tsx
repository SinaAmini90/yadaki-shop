import "./Footer.css";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer">
      <section className="footer-logo">
        <h1>Website Name or logo</h1>
      </section>
      <address>
        <section className="address-container">
          <FaLocationDot className="footer-icon" size={24} color="white" />
          <p>number2, 3rd robat, isfahan, isfahan, iran</p>
        </section>
        <section className="address-container">
          <FaPhone className="footer-icon" size={24} color="white" />
          <p>+989134237637</p>
        </section>
        <section className="address-container">
          <FaEnvelope className="footer-icon" size={24} color="white" />
          <p>sina@yahoo.com</p>
        </section>
      </address>
      <hr />
      <p className="copy-right">
        © 2024. All rights reserved to
        <a href="mailto:siyam1990@gmail.com">Sina Amini</a>.
      </p>
    </div>
  );
}
