import React from "react";

export default function Button({ textOnly, cssClass, children, ...props }) {
  let buttonMode = textOnly ? "text-button" : " ";
  buttonMode += cssClass;
  return (
    <button className={buttonMode} {...props}>
      {children}
    </button>
  );
}
