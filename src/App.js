// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";   // ✅ if you moved About.js to pages/
import Services from "./pages/Blog"; // or ./components/Services if you kept it there
import Blog1 from "./pages/Blog1";
import Blog from "./components/Services";
import Contact from "./components/Contact"; // or ./pages/Contact if you moved it

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />     {/* ✅ About Page */}
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



