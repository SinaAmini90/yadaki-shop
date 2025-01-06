import "./Footer.css";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t] = useTranslation();
  return (
    <div className="footer">
      <section className="footer-logo">
        <img src="/images/company-name-orange.png" alt={t("companyName")}></img>
      </section>
      <address>
        <section className="address-container">
          <FaLocationDot className="footer-icon" size={24} color="white" />
          <p>{t("address")}</p>
        </section>
        <section className="address-container">
          <FaPhone className="footer-icon" size={24} color="white" />
          <p>+98-9130047051</p>
          <p>+98-9132056145</p>
        </section>
        <section className="address-container">
          <FaEnvelope className="footer-icon" size={24} color="white" />
          <p>samanamini@gmail.com</p>
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
