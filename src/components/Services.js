import React from "react";
import "./Services.css";
import Why from "../pages/Why"; 
import { Link } from "react-router-dom";
const blogData = [
  {
    title: "Top 5 SEO Trends to Watch in 2025",
    description:
      "SEO is evolving faster than ever. From voice search to AI-driven results, discover the latest trends shaping the way businesses rank online — and how you can stay ahead of the competition.",
    img: "/assets/blog/top-5.png",
    date: "1 July",
    month: "Jul"
  },
  {
    title: "How Paid Ads Can Double Your ROI",
    description:
      "Running ads on Google and Meta isn't just about spending money — it's about spending smart. Learn how data-driven campaigns can generate high-quality leads and boost your bottom line.",
    img: "/assets/blog/ROI.png",
    date: "1 Aug",
    month: "Aug"
  },
  {
    title: "The Future of Social Media Marketing",
    description:
      "Social platforms are constantly changing, but one thing remains the same: your audience lives there. Explore the latest strategies to build engagement, increase followers, and drive real conversions.",
    img: "/assets/blog/future.png",
    date: "1 Sep",
    month: "Sep"
  },
];
const servicesData = [
  {
    title: "Digital Marketing",
    description:
      "We provide 360° digital marketing solutions that cover everything from strategy to execution. Our integrated approach ensures your brand has a consistent presence across search, social, paid ads, and content. Whether you're looking to increase awareness, generate leads, or boost conversions, our team builds customized campaigns that deliver real business growth.",
    img: "/assets/our-services/services/digital-marketing.png",
  },
  {
    title: "Web Design & Development",
    description:
      "Your website is often the first impression of your brand, and we make sure it's unforgettable. At Gokwik Media, we build modern, responsive, and user-friendly websites that combine aesthetics with functionality. From sleek designs to seamless navigation and mobile optimization, we create sites that convert visitors into customers.",
    img: "/assets/our-services/services/web-design.png",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your search rankings and attract the right audience with our SEO services. From keyword research and on-page optimization to technical SEO and link building, we ensure your website is easily discoverable and primed for organic growth.",
    img: "/assets/our-services/services/seo.png",
  },
  {
    title: "Social Media Management",
    description:
      "Engage and grow your audience with a strong social media presence. Our experts craft compelling content, manage communities, and analyze performance to keep your brand top of mind across platforms.",
    img: "/assets/our-services/services/perform.png",
  },
  {
    title: "Content Creation",
    description:
      "High-quality content drives results. We create blog posts, videos, infographics, and more that captivate your audience, strengthen your brand's voice, and support your marketing goals.",
    img: "/assets/our-services/services/marketing.png",
  },
  {
    title: "Brand Strategy",
    description:
      "Establish a clear brand identity and positioning. We work with you to craft a brand voice, messaging, and visuals that connect with your target market and set you apart from competitors.",
    img: "/assets/our-services/services/brand-build.png",
  },
  {
    title: "Email Marketing",
    description:
      "Drive conversions with personalized email campaigns. From newsletters to automated sequences, we design and execute strategies that keep your audience engaged and coming back.",
    img: "/assets/our-services/services/ads.png",
  },
  {
    title: "Paid Advertising",
    description:
      "Maximize ROI with targeted ad campaigns on Google, Facebook, Instagram, and more. Our team ensures every dollar spent delivers measurable results through precise targeting and optimization.",
    img: " /assets/our-services/services/perform.png",
  },
];

function Services() {
  return (
    <section className="services-section">
      
      <div className="services-container">
         <section className="services-header">
          <img src="../components/services.css" alt="Our services" />
         </section>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`service-card ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="service-image">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="service-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                 <div className="services-card-footer">
              <button className="services-read-more">Read More</button>
              <button className="services-arrow">
                {/* You can also replace with an inline SVG */}
                <img src="/assets/button.png" alt="Go" />
              </button>
            </div>
              </div>
            </div>
          ))}
        </div>
      </div>
         <Why />

       <section className="blog-grid">
              {blogData.map((blog, index) => (
                <div className="blog-card" key={index}>
                  <div className="blog-img">
                    <img src={blog.img} alt={blog.title} />
                    <div className="date-badge">
                      <span className="date-number">1</span>
                      <span className="date-month">{blog.month}</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <h2>{blog.title}</h2>
                    <p>{blog.description}</p>
                    <div className="blog-card-footer">
                      <Link to="/blog1" className="learn-link">
                        <button className="blog-read-more">Read More</button>
                      </Link>
                      <button className="blog-arrow">
                        <img src="/assets/button.png" alt="Go" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </section>
        
   

    </section>
  );
}

export default Services;