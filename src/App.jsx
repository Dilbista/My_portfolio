import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./assets/components/Navbar/Navbar";
import Home from "./assets/pages/Home";
import BlogPost from "./assets/pages/BlogPost";

import AboutPage from "./assets/pages/About";
import ContactPage from "./assets/pages/Contact";
import Blog from "./assets/pages/Blog";

// Scroll to section when URL contains a hash
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const target = document.querySelector(hash);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Handle smooth scrolling */}
      <ScrollToHash />

      {/* Application Routes */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
    </>
  );
}

export default App;
