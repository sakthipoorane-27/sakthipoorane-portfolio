import { motion } from "framer-motion";
import { Award, Braces, Code2, Terminal } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/certifications";

const iconMap = { Code2, Braces, Python: Code2, Terminal };

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="05 / Certifications"
          title="Learning beyond the classroom."
          description="Certification details below are taken directly from the uploaded resume."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <motion.article
                key={cert.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="cert-card"
              >
                <div className="cert-icon"><Icon size={20} /></div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-violet-500">{cert.date}</p>
                  <h3 className="mt-2 text-lg font-bold">{cert.name}</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
