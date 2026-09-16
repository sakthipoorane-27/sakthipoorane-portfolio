import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site } from "../data/site";

export default function Contact({ notify }) {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      notify("Email copied to clipboard");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      notify("Copy was blocked — please copy the email manually");
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    notify("Opening your email client");
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="07 / Contact"
          title="Let’s build something together."
          description="I’m open to internship and software development opportunities. The form below opens your email client — no fake backend submission is used."
        />

        <div className="grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="premium-card p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Direct contact</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="feature-icon"><Mail size={18} /></span>
                <div className="min-w-0 flex-1"><p className="text-xs text-slate-400">Email</p><p className="truncate text-sm font-semibold">{site.email}</p></div>
                <button className="icon-button" onClick={copyEmail} aria-label="Copy email">{copied ? <Check size={15} /> : <Copy size={15} />}</button>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="contact-social"><Linkedin size={18} /><span><b>LinkedIn</b><small>Connect professionally</small></span></a>
              <a href={site.github} target="_blank" rel="noreferrer" className="contact-social"><Github size={18} /><span><b>GitHub</b><small>Explore the code</small></span></a>
            </div>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="premium-card p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field"><span>Name</span><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
              <label className="field"><span>Email</span><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
            </div>
            <label className="field mt-5"><span>Message</span><textarea required rows="6" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about the opportunity or idea..." /></label>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-slate-400">Frontend-only · opens your mail client</p>
              <button type="submit" className="btn-primary">Send Message <Send size={15} /></button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
