import React from "react";
import { Phone, Mail, MapPin } from "lucide-react"; // using lucide-react icons
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="contact-card">
        <div className="icon">
          <Phone size={28} />
        </div>
        <h3>CALL US</h3>
        <p><a href="tel:+919662165636">+91 96621 65636</a></p>
        <p><a href="tel:+919662165636">+91 96621 65636</a></p>
      </div>

      <div className="contact-card">
        <div className="icon">
          <Mail size={28} />
        </div>
        <h3>EMAIL</h3>
        <p><a href="mailto:gokwikmedia@gmail.com">gokwikmedia@gmail.com</a></p>
        <p><a href="mailto:minallodhiya@gmail.com">minallodhiya@gmail.com</a></p>
      </div>

      <div className="contact-card">
        <div className="icon">
          <MapPin size={28} />
        </div>
        <h3>ADDRESS</h3>
        <p>
          417, 4th Floor, Escon Plaza, Chhaprabhattha Road, Amroli,<br />
          Surat, Gujarat 394107
        </p>
      </div>
    </section>
  );
}

export default ContactInfo;
