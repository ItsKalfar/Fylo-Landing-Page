import React from "react";
import "./Footer.css";
import phoneIcon from "./../images/icon-phone.svg";
import emailIcon from "./../images/icon-email.svg";
import footerLogo from "./../images/logoFooter.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="first_column">
            <img src={footerLogo} alt="footerLogo" id="footerLogo" />
            <div className="phone">
              <img src={phoneIcon} alt="phone_icon" className="phone_icon" />
              <p>Phone: +1-543-123-4567</p>
            </div>
            <div className="mail">
              <img src={emailIcon} alt="mail_icon" className="mail_icon" />
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className="second_column">
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/"> Jobs</a>
              </li>
              <li>
                <a href="/"> Press</a>
              </li>
              <li>
                <a href="/"> Blog</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/"> Contact Us</a>
              </li>
              <li>
                <a href="/"> Terms</a>
              </li>
              <li>
                <a href="/"> Privacy</a>
              </li>
            </ul>
          </div>
          <div className="social_media">
            <ul>
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
