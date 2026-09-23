import Hero from "../components/Hero/Hero";
import Skills from "../components/Skill/Skills";
import Projects from "../components/Project/Projects";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
