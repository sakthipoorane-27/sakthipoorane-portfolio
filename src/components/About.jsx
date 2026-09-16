import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Code2, Database, Layers3, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const cards = [
  { icon: Code2, label: "Full-stack", text: "Building responsive interfaces and API-backed applications." },
  { icon: BrainCircuit, label: "AI-powered", text: "Exploring practical AI integration inside real products." },
  { icon: Database, label: "Backend", text: "Working with Node.js, Express.js, Flask and databases." }
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="01 / About"
          title="Engineering with curiosity, purpose and a product mindset."
          description="I’m a final-year B.Tech Information Technology student interested in building practical software solutions and AI-powered applications."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="premium-card p-7 sm:p-9"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="card-kicker"><Sparkles size={14} /> About me</span>
              <span className="text-xs text-slate-400">Chennai · India</span>
            </div>
            <div className="space-y-5 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              <p>
                My current focus is software development across the frontend and backend, with a strong interest in the MERN ecosystem and AI integration.
              </p>
              <p>
                I’ve worked with React, Node.js, Express.js, MongoDB, Python, SQL, JavaScript and Git/GitHub while developing projects that solve concrete problems rather than just demonstrating technology.
              </p>
              <p>
                I’m especially interested in full-stack development, backend engineering and building AI-enabled experiences that feel useful, reliable and easy to use.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Python", "SQL", "AI"].map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {cards.map(({ icon: Icon, label, text }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="premium-card group p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="feature-icon"><Icon size={19} /></span>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <h3 className="font-semibold">{label}</h3>
                      <ArrowUpRight size={16} className="text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="premium-card-soft flex items-center gap-4 p-6">
              <span className="feature-icon"><Layers3 size={19} /></span>
              <div>
                <p className="text-sm font-semibold">From idea → interface → API → product</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">Learning by building and iterating on real-world applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
