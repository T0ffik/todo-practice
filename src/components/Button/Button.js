import React from "react";
import propTypes from "prop-types";
import "./Button.scss";

export const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button className="btn" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.string.isRequired,
  onClick: propTypes.func,
  type: propTypes.oneOf(["button", "submit"]),
};
