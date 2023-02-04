import React from "react";
import NavBar from "./NavBar";
import "./Header.css";
const Header = ({ onCartShow }) => {
  return (
    <div className="header">
      <NavBar onCartShow={onCartShow} />
      <div className="banner">
        <h2>Shoppy</h2>

        <p> Shop For India's Gen Z</p>
      </div>
    </div>
  );
};

export default Header;
