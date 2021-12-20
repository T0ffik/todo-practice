import React from "react";
import propTypes from "prop-types";
import "./Button.scss";

export const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
