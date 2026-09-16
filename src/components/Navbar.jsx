import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "../data/site";
import { scrollToSection } from "../lib/utils";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const marker = window.scrollY + 150;
      let current = "home";
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= marker) current = item.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the page from scrolling behind the open mobile navigation.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    // Let the mobile menu close before scrolling so the target position is stable.
    window.setTimeout(() => scrollToSection(id), 0);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`container-shell transition-all ${scrolled ? "nav-shell-scrolled" : ""}`}>
        <nav className="nav-shell relative z-[101]">
          <button onClick={() => go("home")} className="group flex items-center gap-3" aria-label="Go to home">
            <span className="brand-mark">S</span>
            <span className="hidden text-sm font-bold tracking-tight sm:block">Sakthipoorane<span className="text-violet-500">.</span></span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`nav-link ${active === item.id ? "nav-link-active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              className="icon-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title="Toggle theme"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              type="button"
              className="icon-button lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <>
              <motion.button
                type="button"
                aria-label="Close navigation"
                className="nav-mobile-backdrop lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              />
              <motion.div
                id="mobile-navigation"
                role="navigation"
                aria-label="Mobile navigation"
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="nav-mobile lg:hidden"
              >
                {navItems.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => go(item.id)}
                    className={`nav-mobile-link ${active === item.id ? "text-violet-500" : ""}`}
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
