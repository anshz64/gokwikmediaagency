import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-section about">
          <img src="assets/main-logo.png" alt="GoKwiK Media Logo" className="footer-logo" />
          <p>
            GoKwiK Media delivers smart digital marketing solutions to grow
            brands with SEO, ads, and creative strategies.
          </p>
          <p><FaPhoneAlt className="icon" /> +91 96261 65636</p>
          <p>
            <FaMapMarkerAlt className="icon" /> 417, 4th Floor, Escon Plaza, Chaparbhatta Road, Amroli,
            Surat, Gujarat 394107
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section services">
          <h3>Services</h3>
          <ul>
            <li>Website Development</li>
            <li>SEO Optimization</li>
            <li>Content Marketing</li>
            <li>Branding & Strategy</li>
            <li>Social Media Marketing</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>Our Newsletter</h3>
          <p>Sign up to Privitar’s weekly newsletter to get the latest updates.</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter Your E-mail" />
            <button>Subscribe</button>
          </div>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 GoKwiK Media. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
