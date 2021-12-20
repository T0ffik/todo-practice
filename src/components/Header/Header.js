import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <span className="header--title">Todo List</span>
    </header>
  );
};
