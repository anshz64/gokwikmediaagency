import React from "react";
import "./Footer.css";
// Import Link from react-router-dom
import { Link } from "react-router-dom"; 
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* ... (other sections) ... */}

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          {/* 👇 Use the Link component for internal navigation */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        {/* ... (other sections) ... */}
        
        <div className="footer-section services">
          <h3>Services</h3>
          {/* You might want these to link to specific sections on your services page or anchor tags */}
          <ul>
            <li><Link to="/services/web-development">Website Development</Link></li>
            <li><Link to="/services/seo">SEO Optimization</Link></li>
            <li><Link to="/services/content-marketing">Content Marketing</Link></li>
            <li><Link to="/services/branding">Branding & Strategy</Link></li>
            <li><Link to="/services/social-media">Social Media Marketing</Link></li>
          </ul>
        </div>

        {/* ... (social icons) ... */}
        <div className="social-icons">
          {/* 👇 Use a standard <a> tag for external social links */}
          <a href="https://www.facebook.com/GoKwiKMedia" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com/GoKwiKMedia" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/GoKwiKMedia" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.youtube.com/GoKwiKMedia" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>

        {/* ... (rest of the component) ... */}
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 GoKwiK Media. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;