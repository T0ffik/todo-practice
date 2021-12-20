import React from "react";
import propTypes from "prop-types";

export const Title = ({ children }) => {
  return <h2>{children}</h2>;
};

Title.propTypes = {
  children: propTypes.string.isRequired,
};
