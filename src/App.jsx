import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./assets/components/Navbar/Navbar";

import Home from "./assets/pages/Home";
import AboutPage from "./assets/pages/About";
import ContactPage from "./assets/pages/Contact";
import Blog from "./assets/pages/Blog";
import BlogPost from "./assets/pages/BlogPost";
import Privacy from "./assets/pages/Privacy";
import Terms from "./assets/pages/Terms";

/* ==============================
   Scroll to Hash / Top
============================== */

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

/* ==============================
   App
============================== */

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Smooth Scroll */}
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

        {/* Blog Post */}
        <Route path="/blog/:postId" element={<BlogPost />} />

        {/* Privacy Policy */}
        <Route path="/privacy" element={<Privacy />} />

        {/* Terms & Conditions */}
        <Route path="/terms" element={<Terms />} />

      </Routes>
    </>
  );
}

export default App;
