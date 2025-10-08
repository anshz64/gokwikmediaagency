import React from "react";
import "./What.css";


const services = [
  {
    title: "Web Design & Development",
    img: "/assets/about/what-we-do/web-design.png",
    desc: "Create stunning, responsive websites tailored to your business goals for better user experience and conversions.",
  },
  {
    title: "SEO Optimization",
    img: "/assets/about/what-we-do/seo.png",
    desc: "Boost your website's visibility with advanced SEO strategies to drive organic traffic and improve search rankings.",
  },
  {
    title: "Social Media Marketing",
    img: "/assets/about/what-we-do/social-media.png",
    desc: "Engage your audience and grow your brand presence across major social platforms with creative campaigns.",
  },
  {
    title: "Paid Ads (Google & Meta)",
    img: "/assets/about/what-we-do/ads.png",
    desc: "Maximize ROI with data-driven ad campaigns on Google & Meta that deliver qualified leads and sales.",
  },
  {
    title: "Branding & Strategy",
    img: "/assets/about/what-we-do/brand-build.png",
    desc: "Build a powerful brand identity with clear messaging, creative design, and growth-focused strategies.",
  },
  {
    title: "Content Marketing",
    img: "/assets/about/what-we-do/content.png",
    desc: "Attract and retain customers through valuable, high-quality content that educates, inspires, and converts.",
  },
  {
    title: "Digital Marketing",
    img: "/assets/about/what-we-do/digital-marketing.png",
    desc: "A complete 360° digital growth approach—covering SEO, social media, ads, and content—to build awareness and drive conversions.",
  },
  {
    title: "Performance Marketing",
    img: "/assets/about/what-we-do/perform.png",
    desc: "Data-driven campaigns that maximize ROI. We optimize every click and conversion to ensure measurable business growth.",
  },
  {
    title: "Retention Marketing",
    img: "/assets/about/what-we-do/marketing.png",
    desc: "Boost customer loyalty with personalized emails, marketing, rewards and strategies that drive repeat business.",
  },
];

const What = () => (
  <section className="what-section">
    <div className="what-heading">
      <span className="what-heading-line" />
      <h2 className="what-title">What We Do Best</h2>
      <span className="what-heading-line" />
    </div>
    <p className="what-subtitle">
      Our tailored solutions help your brand stand out online.
    </p>

    <div className="what-grid">
      {services.map((service, idx) => (
        <div className="what-card" key={idx}>
          <div className="what-card-img">
            <img src={service.img} alt={service.title} />
          </div>
          <div className="what-card-body">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="what-card-footer">
              <button className="what-read-more">Read More</button>
              <button className="what-arrow">
                {/* You can also replace with an inline SVG */}
                <img src="/assets/button.png" alt="Go" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default What;
