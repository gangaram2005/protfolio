import React from "react";
import "./About.css";
import about from "../../img/profile.png";
export default function About() {
  return (
    <>
      <div className="container about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-xs-6 col-xs-12 about-img">
            <img src={about} alt="Ganga Ram Jaisi" />
          </div>
          <div className="col-md-6 col-xl-6 col-xs-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              As a proficient Full Stack Developer specializing in MERN
              (MongoDB, Express.js, React.js, Node.js) and Python/Django, And
              Django Rest Framework Developer I bring a diverse skill set and a
              passion for crafting robust web applications. Below are some
              highlights of my portfolio showcasing my expertise and experience
              in both MERN and Python/Django development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
