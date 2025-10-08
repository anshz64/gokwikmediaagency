import React from "react";
import "./Blog1.css";

function Blog1() {
  return (
    <div className="blog1-page">
      {/* Header Section */}
       <section className="blog1-header">
        
      </section>

      {/* Blog Content */}
      <div className="blog1-container">
        <img
          src="/assets/blog/future.png"
          alt="The Future of Social Media Marketing"
          className="blog1-image"
        />
        <div className="blog1-content">
          <h2>The Future of Social Media Marketing</h2>
          <div className="blog1-meta">
            <span>🖊 MarketExperts</span>
            <span>📅 May 10, 2023</span>
            <span className="blog1-tag">Social Media</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            eleifend convallis nunc, sit amet luctus turpis vestibulum ut.
            Praesent in mauris vel justo malesuada bibendum. Sed sed sem ut
            turpis viverra cursus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis, mauris vel aliquam sagittis, nunc metus feugiat arcu, nec
            condimentum risus ex id urna. Integer eget eros lacus. Cras
            ullamcorper feugiat lorem, nec tristique mi aliquet sit amet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog1;
