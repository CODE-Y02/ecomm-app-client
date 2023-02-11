import React from "react";
import NavBar from "./NavBar";
import "./Header.css";

const Header = ({ onCartShow }) => {
  return (
    <div className="header">
      <NavBar onCartShow={onCartShow} />
      <div className="banner">
        <h2> CODERS</h2>

        <p> Shop For DEVS</p>
      </div>
    </div>
  );
};

export default Header;
