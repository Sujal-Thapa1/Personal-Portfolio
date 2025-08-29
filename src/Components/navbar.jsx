import React, { useState } from "react";
import "../CSS Components/navbar.css";

export default function Navbar({ text, onButtonClick }) {
  const nextMode = text;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="left_div">
          <div className="logo">
            <h4 className="name">Sujal Thapa</h4>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="right_div">
          <ul>
            <li className="home">
              <a href="#home">Home</a>
            </li>
            <li className="about">
              <a href="#about-page">About</a>
            </li>
            <li className="Proj">
              <a href="#project-page">Projects</a>
            </li>
            <li className="contact">
              <a href="#contact-page">Contact</a>
            </li>
          </ul>
          <div className="modeChange">
            <button
              id="switchMode"
              onClick={onButtonClick}
              className={`render-theme ${
                nextMode === "Light" ? "white" : "black"
              }`}
            >
              {`${nextMode} Mode`}
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="#home" onClick={closeMobileMenu}>Home</a>
          </li>
          <li>
            <a href="#about-page" onClick={closeMobileMenu}>About</a>
          </li>
          <li>
            <a href="#project-page" onClick={closeMobileMenu}>Projects</a>
          </li>
          <li>
            <a href="#contact-page" onClick={closeMobileMenu}>Contact</a>
          </li>
        </ul>
        <div className="modeChange">
          <button
            id="switchModeMobile"
            onClick={(e) => {
              onButtonClick(e);
              closeMobileMenu();
            }}
            className={`render-theme ${
              nextMode === "Light" ? "white" : "black"
            }`}
          >
            {`${nextMode} Mode`}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </>
  );
}
