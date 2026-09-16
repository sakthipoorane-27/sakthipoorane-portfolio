import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site } from "../data/site";

export default function Education() {
  return (
    <section id="education" className="section-pad section-alt">
      <div className="container-shell">
        <SectionHeading eyebrow="06 / Education" title="Building a strong foundation in Information Technology." />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="education-card"
        >
          <div className="education-icon"><GraduationCap size={26} /></div>
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-500">{site.period}</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight">{site.education}</h3>
                <p className="mt-2 font-medium text-slate-600 dark:text-slate-300">{site.institution}</p>
              </div>
              <div className="cgpa-card"><span>CGPA</span><strong>{site.cgpa}</strong></div>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="tag"><MapPin size={12} /> {site.location}</span>
              <span className="tag"><Sparkles size={12} /> Academic Honors Program</span>
              <span className="tag">Final-year student</span>
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
              Pursuing the B.Tech Information Technology degree while completing additional credit-based courses through the Academic Honors Program.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
