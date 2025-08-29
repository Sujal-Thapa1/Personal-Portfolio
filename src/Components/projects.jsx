import React from "react";
import "../CSS Components/project.css";
import Gradient from "../images/gradient.png";
import weather from "../images/weather.png";

export default function Projects() {
  return (
    <>
      <div className="project-Container" id="project-page">
        <h1 className="title">Projects</h1>
        
        <div className="projects">
          <div className="project-1 box">
            <div className="project-image">
              <img src="" alt="Youtube Clone Project" />
            </div>
            <div className="content">
              <h3>Youtube Clone</h3>
              <span>Access to my project</span>
              <div className="project-actions">
                <a href="">
                  <button className="projectLink">Click Me</button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="project-2 box">
            <div className="project-image">
              <img src={Gradient} alt="Gradient Color Generator Project" />
            </div>
            <div className="content">
              <h3>Gradient Color Generator</h3>
              <span>Access to my project</span>
              <div className="project-actions">
                <a href="https://github.com/Sujal-Thapa1/React-Projects">
                  <button className="projectLink">Click Me</button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="project-3 box">
            <div className="project-image">
              <img src={weather} alt="Weather Application Project" />
            </div>
            <div className="content">
              <h3>Weather Application</h3>
              <span>Access to my project</span>
              <div className="project-actions">
                <a href="https://github.com/Sujal-Thapa1/JavaScript-Logbook">
                  <button className="projectLink">Click Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* View More Button at the End */}
        <div className="view-more">
          <a href="https://github.com/Sujal-Thapa1?tab=repositories" target="_blank" rel="noopener noreferrer">
            <button className="view-more-btn">View More Projects</button>
          </a>
        </div>
      </div>
    </>
  );
}
