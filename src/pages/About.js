// src/pages/About.js
import React from "react";
import "./About.css";
import Services from "./what"; // Importing Services component
import Why from "./Why"; // Importing Why component


function About() {
  return (

    <section className="about-section">
      
      <section className="about-header"></section>
      <div className="about-container">
         

        {/* Left Image */}
        <div className="about-image">
          <img src="/assets/about/main.png" alt="About Us" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2>Empowering Businesses in the Digital World</h2>
          <p>
            At GoKwik Media, we believe digital marketing should be simple, fast,
            and effective. Founded with a vision to help businesses grow online,
            we combine creativity with data-driven strategies to deliver measurable
            results. From SEO and social media to paid ads, branding, and web
            solutions, we empower brands to connect with their audience and achieve
            long-term success.
          </p>

          {/* Mission & Vision */}
          <div className="about-mission-vision">
            <div className="mission-card">
              <img src="/assets/about/icons/mission.png" alt="Mission" />
              <div>
                <h4>Our Mission</h4>
                <p>
                  To provide businesses with smart, result-oriented digital
                  marketing solutions that drive visibility, engagement, and growth
                  in today’s competitive landscape.
                </p>
              </div>
            </div>

            <div className="mission-card">
              <img src="/assets/about/icons/vision.png" alt="Vision" />
              <div>
                <h4>Our Vision</h4>
                <p>
                  To become a trusted global digital partner, helping brands of all
                  sizes scale faster through innovation, creativity, and technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      {/* Core Values */}
<div className="core-values-section">
  <h3 className="core-values-title">
    <span className="core-values-line" />
    Our Core Values
    <span className="core-values-line" />
  </h3>
  <div className="core-values-grid">
    <div className="core-value-card">
      <div className="core-value-icon" style={{ background: "#f5f8ff" }}>
        <img src="/assets/about/icons/innovation.png" alt="Innovation" />
      </div>
      <div className="core-value-label innovation"></div>
    </div>
    <div className="core-value-card">
      <div className="core-value-icon" style={{ background: "#f5f8ff" }}>
        <img src="/assets/about/icons/results.png" alt="Results-Driven" />
      </div>
     
    </div>
    <div className="core-value-card">
      <div className="core-value-icon" style={{ background: "#fff5f5" }}>
        <img src="/assets/about/icons/transparency.png" alt="Transparency" />
      </div>
     </div>
    <div className="core-value-card">
      <div className="core-value-icon" style={{ background: "#fff5f5" }}>
        <img src="/assets/about/icons/creativity.png" alt="Creativity" />
      </div>
      <div className="core-value-label creativity"></div>
    </div>
  </div>
</div>
{/* ===== Services Section (attached below About) ===== */}
      <Services />
      <Why />

    </section>
    
    
  );
}

export default About;
