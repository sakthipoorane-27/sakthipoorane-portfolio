import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Sparkles } from "lucide-react";
import { projects } from "../data/projects";
import ProjectMockup from "./ProjectMockup";
import SectionHeading from "./SectionHeading";

const filters = ["All", "AI", "Full Stack", "Web Development"];

function ProjectLink({ href }) {
  if (!href) return null;
  return (
    <a
      className="project-github-icon"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Open GitHub repository"
      title="View on GitHub"
    >
      <Github size={18} strokeWidth={2.2} />
    </a>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(() => filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter)), [filter]);

  return (
    <section id="projects" className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="03 / Selected work"
          title="Projects built around real problems."
          description="A closer look at applications where product thinking, full-stack engineering and AI integration meet."
        />

        <div className="mb-9 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={`filter-button ${filter === item ? "filter-active" : ""}`}>{item}</button>
          ))}
        </div>

        <div className="space-y-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className={`project-card ${project.featured ? "project-featured" : ""}`}
              >
                <div className="grid lg:grid-cols-[1.08fr_.92fr]">
                  <div className="project-copy order-2 lg:order-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.categories.includes("AI") && <span className="ai-badge"><Sparkles size={12} /> AI</span>}
                      <span className="year-badge">{project.year}</span>
                    </div>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-violet-500">{project.subtitle}</p>
                    <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{project.title}</h3>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>

                    <div className="mt-7">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Key capabilities</p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {project.features.map((feature) => <li key={feature} className="feature-row"><span className="feature-check">✓</span>{feature}</li>)}
                      </ul>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">{project.stack.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      <ProjectLink href={project.github} />
                    </div>
                  </div>
                  <div className="project-visual order-1 lg:order-2"><ProjectMockup kind={project.kind} /></div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
