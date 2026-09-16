import { motion } from "framer-motion";
import { Braces, Code2, Database, GitBranch, Layers3, Server, Sparkles, Terminal } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database,
  Programming: Terminal,
  Engineering: Layers3,
  Tools: GitBranch,
  AI: Sparkles
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad section-alt">
      <div className="container-shell">
        <SectionHeading
          eyebrow="02 / Skills"
          title="A practical technology toolkit."
          description="A growing stack across interfaces, APIs, databases, programming fundamentals and applied AI — presented without artificial skill percentages."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.title] || Braces;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.045 }}
                whileHover={{ y: -5 }}
                className="skill-card"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-500">{group.eyebrow}</p>
                    <h3 className="mt-1 text-lg font-bold">{group.title}</h3>
                  </div>
                  <span className="feature-icon"><Icon size={18} /></span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => <span key={skill} className="skill-pill">{skill}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-6 premium-card-soft p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Engineering mindset</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">DSA · OOP · DBMS · Problem-Solving · REST APIs · Git workflow</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400"><span className="status-dot" /> Always learning</div>
          </div>
        </div>
      </div>
    </section>
  );
}
