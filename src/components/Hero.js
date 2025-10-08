import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <img src="/assets/hero/shadow.png" alt="shadow" className="hero-shadow" />
      <div className="hero-left">
        <div className="hero-tag-row">
          <span className="hero-tag-line" />
          </div><div className="hero-tag-row">
          <span className="hero-tag">DIGITAL MARKETING AGENCY</span>
        </div>
        <h1 className="hero-title">Grow Your Brand Faster<br />with GoKwik Media</h1>
        <p className="hero-desc">
          We deliver data-driven digital marketing strategies that boost visibility, generate leads, and maximize ROI.
        </p>
        <div className="hero-btn-row">
          <a href="#get-started" className="hero-btn-primary">Get Started</a>
          <span className="hero-btn-arrow">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15" stroke="#FF4934" strokeWidth="2" />
              <path d="M11 16H21M21 16L17 12M21 16L17 20" stroke="#FF4934" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <img src="/assets/hero/plane.png" alt="rocket" className="hero-rocket" />
        </div>
        <img src="/assets/hero/dots.png" alt="dots" className="hero-dots" />
      </div>
      
      <div className="hero-right">
        {/* <div className="hero-img-bg"> */}
          <img src="/assets/hero/hero.png" alt="GoKwik Media" className="hero-main-img" />
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;