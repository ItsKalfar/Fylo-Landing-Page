import React from "react";
import "./HeroSection.css";
import heroImg from "./../images/illustration-1.svg";
const HeroSection = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <img src={heroImg} alt="hero-img" />
          <div className="textBox">
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p className="text">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <div className="call-to-action">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email.."
              />
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
