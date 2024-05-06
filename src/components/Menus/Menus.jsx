import React from "react";
import "./menus.css";
import Profile from "../../img/profile.png";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";
import { Link } from "react-scroll";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={Profile} alt="profile pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                  Home
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                  About
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook />
                  Education
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode />
                  Work Experience
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome title="Home" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout title="About" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook title="Education" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech title="Tech Stack" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector title="Project" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode title="Work Experience" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact title="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
