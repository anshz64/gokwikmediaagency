import React, { useState, useEffect } from "react";
import "./Why.css";

const features = [
  {
    icon: "/assets/about/why/icon/fast-result.png",
    title: "Fast Results with Smart Strategy",
  },
  {
    icon: "/assets/about/why/icon/data-driven.png",
    title: "Data-Driven Campaigns",
  },
  {
    icon: "/assets/about/why/icon/Transparent.png",
    title: "Transparent & Collaborative",
  },
  {
    icon: "/assets/about/why/icon/roi.png",
    title: "100% ROI Focused",
  },
];

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
  {
    name: "Sophia Brown",
    role: "E-Commerce Entrepreneur",
    text: "GoKwik Media turned our ads around – CTR doubled and conversions jumped. Couldn’t be happier with their service!",
    avatar: "/assets/about/why/client/Michael.png",
  },
  {
    name: "Ryan Walker",
    role: "Marketing Lead",
    text: "Amazing attention to detail. They delivered exactly what we wanted and kept us informed at every step.",
    avatar: "/assets/about/why/client/jesssica.png",
  },
  {
    name: "Emily Davis",
    role: "Founder, Lifestyle Brand",
    text: "Professional team with great ideas. They boosted our brand visibility and online sales quickly.",
    avatar: "/assets/about/why/client/david.png",
  },
];

const Why = () => {
  const [page, setPage] = useState(0);
  const visibleCount = 3;
  const totalPages = Math.ceil(testimonials.length / visibleCount);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 2500);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <div className="why-page">
      {/* ===== Service Strips ===== */}
     
      <div className="why-strips">
        <div className="strip strip-red">
          <div className="strip-track-red">
            <span>✦  Influencer Marketing</span>
            <span>✦  Product Review</span>
            <span>✦  Brand Making</span>
            <span>✦  Graphic and Video Editing</span>
            <span>✦  SEO Optimization</span>
            <span>✦  Social Media Marketing</span>
            
          </div>
        </div>

        <div className="strip strip-blue">
          <div className="strip-track-blue">
            <span>✦  Content Marketing</span>
            <span>✦  Local Marketing</span>
            <span>✦  Paid Ads (Google & Meta)</span>
            <span>✦  Web Design & Development</span>
            <span>✦  Whatsapp API</span>
            <span>✦  Trademark Registration</span>
            
          </div>
        </div>
      </div>
      {/* ===== Why Choose Us ===== */}
      <section className="why-choose-section">
        <div className="why-choose-header">
          <div className="why-choose-title">
            <span className="why-choose-line" />
            <span className="why-choose-label">Why Choose Us</span>
            <span className="why-choose-line" />
          </div>
          <p className="why-choose-desc">
            We combine creativity and analytics to deliver campaigns
            <br /> that drive results quickly.
          </p>
        </div>

        <div className="why-choose-main">
          <div className="why-choose-img">
            <img src="/assets/about/why/main.png" alt="Why GoKwik Media" />
          </div>

          <div className="why-choose-content">
            <h2 className="why-choose-heading">
              Why Businesses <br />Choose GoKwik Media
            </h2>
            <p className="why-choose-text">
              At GoKwik Media, we go beyond just running campaigns — we focus on
              building strategies that create lasting impact. Every solution we
              deliver is designed to increase visibility, engage the right
              audience, and generate measurable growth that drives your business
              forward.
            </p>

            <div className="why-choose-features">
              {features.map((f, i) => (
                <div className="why-feature" key={i}>
                  <img src={f.icon} alt={f.title} />
                  <span>{f.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section
        className="why-testimonials-section"
        style={{ backgroundImage: "url('/assets/about/why/client-back.png')" }}
      >
        <div className="why-testimonials-header">
          <span className="why-testimonials-line" />
          <span className="why-testimonials-title">What Our Clients Say</span>
          <span className="why-testimonials-line" />
        </div>
        <p className="why-testimonials-desc">
          What Customers Say's About Our Digital Marketing Services
        </p>

        <div className="why-carousel">
          <div
            className="why-carousel-track"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="why-carousel-slide">
                <div className="why-testimonial-card">
                  <img
                    className="why-testimonial-avatar"
                    src={t.avatar}
                    alt={t.name}
                  />
                  <h4>{t.name}</h4>
                  <span className="why-testimonial-role">{t.role}</span>
                  <p className="why-testimonial-text">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-testimonials-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === page ? "active" : ""}`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Why;
