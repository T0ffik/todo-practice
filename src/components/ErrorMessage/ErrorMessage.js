import React from "react";
import propTypes from "prop-types";
import "./ErrorMessage.scss";

export const ErrorMessage = ({ children, isError }) => {
  return (
    <span
      className="error"
      style={{ visibility: isError ? "hidden" : "visible" }}
    >
      {children}
    </span>
  );
};

ErrorMessage.propTypes = {
  children: propTypes.string.isRequired,
  isError: propTypes.bool,
};
