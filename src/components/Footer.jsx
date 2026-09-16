import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-8 dark:border-white/[0.07]">
      <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold">Sakthipoorane<span className="text-violet-500">.</span></p>
          <p className="mt-1 text-xs text-slate-400">B.Tech IT · Software & AI Enthusiast</p>
        </div>
        <div className="flex items-center gap-2">
          <a className="social-button" href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
          <a className="social-button" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a className="social-button" href={`mailto:${site.email}`} aria-label="Email"><Mail size={16} /></a>
          <button className="social-button ml-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp size={16} /></button>
        </div>
        <p className="text-xs text-slate-400 sm:order-last">© 2026 Sakthipoorane. All rights reserved.</p>
      </div>
    </footer>
  );
}
