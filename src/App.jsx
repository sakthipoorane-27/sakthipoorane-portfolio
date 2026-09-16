import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import BackgroundFX from "./components/BackgroundFX";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { useScrollProgress } from "./hooks/useScrollProgress";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const [toast, setToast] = useState("");
  const progress = useScrollProgress();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);

  const notify = (message) => {
    setToast(message);
    window.clearTimeout(window.__portfolioToast);
    window.__portfolioToast = window.setTimeout(() => setToast(""), 2200);
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <BackgroundFX />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact notify={notify} />
      </main>
      <Footer />
      <Toast message={toast} />
    </>
  );
}
