import React from "react";
import "./Contact.css";
import ContactInfo from "./ContactInfo"; // ✅ import correctly


function Contact() {
  return (
    
    <div className="contact-page">
      <section className="contact-header">
  
      </section>
      {/* Contact Info Cards Section */}
      <ContactInfo />

      {/* Contact Form + Photo Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          {/* Left Side (Form) */}
          <div className="contact-form">
            <h2>Let’s Talk Growth</h2>
            <p>
              Have a project in mind or need a custom digital strategy? We’d love
              to hear from you.
            </p>

            <form>
              <div className="form-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="form-row">
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone Number" />
              </div>
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Right Side (Photo) */}
          <div className="contact-photo">
            <img
              src="/assets/contactperson.png"
              alt="Contact Person"
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1109726321326!2d72.87193907462263!3d21.250041981795074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f52a6a4e1c1%3A0x7c2dbda7d5b812e4!2sEscon%20Plaza!5e0!3m2!1sen!2sin!4v1694024429093!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
