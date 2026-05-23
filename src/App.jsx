import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Career from "./components/Career";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Documentation from "./components/Documentation";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Career />
      <Education />
      <Skills />
      <Projects />
      <Documentation />
      <Contact />
    </>
  );
}
