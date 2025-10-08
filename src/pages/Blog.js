import React from "react";
import "./Blog.css";
import "./Blog1.js";
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

function Blog() {
  return (
    <div className="blog-page">
      {/* Page Header with background image */}
      <section
        className="blog-header"
        style={{
          background: 'url("/assets/blog/header.png") no-repeat center center',
          backgroundSize: "cover",
        }}
      ></section>

      {/* Blog Cards Grid */}
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
    </div>
  );
}

export default Blog;