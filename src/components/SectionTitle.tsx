import { SectionTitleProps } from "../types";
import "./SectionTitle.css";

export default function SectionTitle({ children, lang }: SectionTitleProps) {
  const cssClass = "section-title " + lang;
  return <h2 className={cssClass}>{children}</h2>;
}
