import React from "react";
import logo from "./../images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="nav-container">
          <img src={logo} alt="logo" id="header-logo" />
          <nav>
            <ul className="menu-items">
              <li className="menu-links">
                <a href="#home">Features</a>
              </li>
              <li className="menu-links">
                <a href="#teams">Teams</a>
              </li>
              <li className="menu-links">
                <a href="#signin">Sign In</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
