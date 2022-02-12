import React from "react";
import "./TeamsSection.css";
import profile from "./../images/avatar-testimonial.jpg";
import arrow from "./../images/icon-arrow.svg";
import quote from "./../images/icon-quotes.svg";
import illustration from "./../images/illustration-2.svg";
import bgCurveMobile from "./../images/bg-curve-mobile.svg";
import bgCurveDesktop from "./../images/bg-curve-desktop.svg";

const TeamsSection = () => {
  return (
    <>
      <img src={bgCurveMobile} alt="bg-curve" className="bgCurveMobile" />
      <img src={bgCurveDesktop} alt="bg-curve" className="bgCurveDesktop" />
      <section id="teams">
        <div className="container">
          <div class="left_section">
            <h4 class="info_heading">Stay productive, wherever you are</h4>
            <p class="info_primary_text">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p class="info_secondary_text">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <div class="link">
              <a href="/">See how Fylo works</a>
              <img src={arrow} alt="arrow" class="arrow" />
            </div>
            <div class="card">
              <img src={quote} alt="quote" class="quote" />
              <p class="card_text">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div class="profile">
                <img src={profile} alt="img" class="profile_pic" />
                <div class="name_role">
                  <p class="name">Kyle Burton</p>
                  <p class="role">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
          <div class="right_section">
            <img src={illustration} alt="info_img" class="info_img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamsSection;
