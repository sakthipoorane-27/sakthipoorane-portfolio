import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-pad section-alt">
      <div className="container-shell">
        <SectionHeading
          eyebrow="04 / Experience"
          title="Hands-on software development experience."
          description="Professional experience is presented only where it is confirmed by the resume."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="timeline-card"
        >
          <div className="timeline-rail"><span className="timeline-pulse" /></div>
          <div className="timeline-content">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="card-kicker"><BriefcaseBusiness size={14} /> Internship</span>
                <h3 className="mt-4 text-2xl font-black tracking-tight">Software Development Internship</h3>
                <p className="mt-1 font-semibold text-violet-500">Cognifyz IT Solutions Pvt. Ltd.</p>
              </div>
              <span className="year-badge">Completed</span>
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
              Completed a software development internship with hands-on work in practical programming and software development tasks.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Software Development", "Programming", "Web Development"].map((x) => <span className="tag" key={x}>{x}</span>)}
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Worked through practical software development tasks",
                "Applied programming concepts to working solutions",
                "Gained hands-on development workflow experience",
                "Built confidence working with real project requirements"
              ].map((x) => <div className="feature-row" key={x}><CheckCircle2 size={15} className="text-violet-500" />{x}</div>)}
            </div>
            <div className="mt-7 flex items-center gap-2 text-xs text-slate-400"><ArrowUpRight size={13} /> Internship details intentionally kept concise because the resume does not specify dates or a detailed task list.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
