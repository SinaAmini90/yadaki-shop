import React from "react";
import "./SectionTitle.css";

export default function SectionTitle({ cssClass, children }) {
  return <h2 className={cssClass}>{children}</h2>;
}
