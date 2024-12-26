import { ChildrenType } from "../types";
import "./SectionTitle.css";

export default function SectionTitle({ children }: ChildrenType) {
  return <h2 className="section-title">{children}</h2>;
}
