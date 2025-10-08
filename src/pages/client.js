import React, { useEffect, useState } from "react";
import "./client.css";

const testimonials = [
  {
    name: "Michael Lee",
    role: "Small Business Owner of a Local Cafe",
    text: "Impressed with Nua Tech's professionalism and competence. They understood our vision and provided innovative solutions, with outstanding customer service.",
    avatar: "/assets/about/why/client/Michael.png",
  },
  {
    name: "Jessica Taylor",
    role: "Director of Marketing Startup",
    text: "Nua Tech significantly improved our online presence. From website redesign to PPC campaigns, they delivered outstanding results. Highly recommended!",
    avatar: "/assets/about/why/client/jesssica.png",
  },
  {
    name: "David Smith",
    role: "CEO of a Digital Startup",
    text: "Very satisfied with Nua Tech's work. They've improved our brand visibility and provided valuable insights. Thank you!",
    avatar: "/assets/about/why/client/david.png",
  },
];


export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2500); // 2.5 sec
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="why-testimonials-section"
      style={{
        backgroundImage: "url('/assets/about/why/client-back.png')",
      }}
    >
      <div className="why-testimonials-header">
        <span className="why-testimonials-line" />
        <span className="why-testimonials-title">What Our Clients Say</span>
        <span className="why-testimonials-line" />
      </div>

      <p className="why-testimonials-desc">
        What Customers Say's About Our Digital Marketing Services
      </p>

      <div className="why-testimonials-slider">
        <div
          className="why-testimonials-track"
          style={{
            transform: `translateX(-${index * 320}px)`,
          }}
        >
          {testimonials.concat(testimonials).map((t, i) => (
            <div className="why-testimonial-card" key={i}>
              <img
                className="why-testimonial-avatar"
                src={t.avatar}
                alt={t.name}
              />
              <h4>{t.name}</h4>
              <span className="why-testimonial-role">{t.role}</span>
              <p className="why-testimonial-text">{t.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="why-testimonials-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index % testimonials.length ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
