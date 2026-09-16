import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { site } from "../data/site";
import { scrollToSection } from "../lib/utils";
import HeroVisual from "./HeroVisual";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="container-shell w-full">
        <div className="grid items-center gap-14 py-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-10 lg:py-20">
          <div>
            <motion.div initial="hidden" animate="visible" variants={fade} className="status-badge mb-7">
              <span className="status-dot" />
              Open to Internship & Software Development Opportunities
            </motion.div>

            <motion.p initial="hidden" animate="visible" variants={fade} className="mb-4 text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
              Hi, I&apos;m <span className="text-violet-500">Sakthipoorane</span> — a final-year IT student.
            </motion.p>

            <motion.h1 initial="hidden" animate="visible" variants={fade} className="hero-title">
              Building Digital
              <span className="hero-gradient"> Experiences</span>
              <br />
              with Code <span className="text-slate-400 dark:text-slate-500">&</span> AI.
            </motion.h1>

            <motion.p initial="hidden" animate="visible" variants={{ ...fade, visible: { ...fade.visible, transition: { ...fade.visible.transition, delay: 0.1 } } }} className="mt-7 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              Aspiring Software Development Engineer focused on full-stack web development, AI-powered applications and practical software solutions. I enjoy turning ideas into useful, polished digital products.
            </motion.p>

            <motion.div initial="hidden" animate="visible" variants={{ ...fade, visible: { ...fade.visible, transition: { ...fade.visible.transition, delay: 0.18 } } }} className="mt-9 flex flex-wrap gap-3">
              <button className="btn-primary" onClick={() => scrollToSection("projects")}>
                View My Projects <ArrowDown size={16} />
              </button>
              <a className="btn-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
                <Download size={16} /> View Resume
              </a>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={{ ...fade, visible: { ...fade.visible, transition: { ...fade.visible.transition, delay: 0.26 } } }} className="mt-9 flex items-center gap-2">
              <a className="social-button" href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a className="social-button" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a className="social-button" href={`mailto:${site.email}`} aria-label="Email"><Mail size={18} /></a>
              <span className="ml-2 text-xs text-slate-400">Let&apos;s connect</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
