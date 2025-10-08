
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Services from "../pages/what";
import Why from "../pages/Why"; 
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./Home.css";
const blogData = [
  {
    title: "Top 5 SEO Trends to Watch in 2025 ",
    description:
      "SEO is evolving faster than ever. From voice search to AI-driven results, discover the latest trends shaping the way businesses rank online — and how you can stay ahead of the competition.",
    img: "/assets/blog/top-5.png",
  },
  {
    title: "How Paid Ads Can Double Your ROI",
    description:
      "Running ads on Google and Meta isn’t just about spending money — it’s about spending smart. Learn how data-driven campaigns can generate high-quality leads and boost your bottom line.",
    img: "/assets/blog/ROI.png",
  },
  {
    title: "The Future of Social Media Marketing",
    description:
      "Social platforms are constantly changing, but one thing remains the same: your audience lives there. Explore the latest strategies to build engagement, increase followers, and drive real conversions.",
    img: "/assets/blog/future.png",
  },
];
function Home() {
  return (
    <div className="homepage-bg">
      
      <main>
        <Hero />
        <Partners />
        <Services />
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
      </main>
    </div>
  );
}

export default Home;
