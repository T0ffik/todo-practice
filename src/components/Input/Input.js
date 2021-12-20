import React from "react";
import propTypes from "prop-types";
import "./Input.scss";

export const Input = ({ type = "text", ...rest }) => {
  return <input className="input" type={type} {...rest} />;
};

Input.propTypes = {
  placeholder: propTypes.string.isRequired,
  type: propTypes.oneOf(["text", "email"]),
  disabled: propTypes.bool,
};
