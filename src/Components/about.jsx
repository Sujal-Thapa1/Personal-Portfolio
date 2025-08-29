import React from "react";
import "../CSS Components/about.css";
import about from "../images/about.jpeg";

export default function About() {
  return (
    <>
      <div className="about-container" id="about-page">
        <h1>About Me</h1>
        <div className="about-main">
          <div className="about-image">
            <img src={about} alt="About Sujal Thapa" />
          </div>
          <div className="about-content">
            <p>
              Hello! I'm an IT student who thrives at the intersection of web
              development and cloud computing. For me, it's not just about
              building a great application; it's about making sure it runs
              efficiently and scales seamlessly. My toolbox includes JavaScript,
              Python, React, and a growing foundation in Cloud services.
            </p>
            <span>Let's Connect and create something new!</span>
          </div>
        </div>
      </div>
    </>
  );
}
