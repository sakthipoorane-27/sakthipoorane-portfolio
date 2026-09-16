import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="hero-visual hero-photo-only" aria-label="Sakthipoorane profile photo">
      <div className="visual-grid" aria-hidden="true" />
      <motion.div
        className="photo-glow photo-glow-one"
        animate={{ scale: [1, 1.08, 1], opacity: [0.28, 0.42, 0.28] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="photo-glow photo-glow-two"
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="profile-showcase"
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="profile-showcase-frame">
          <img
            src="/images/profile.jpg"
            alt="Sakthipoorane"
            className="profile-showcase-image"
          />
        </div>

        <motion.div
          className="profile-floating-badge"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="status-dot" />
          <span>Software & AI</span>
        </motion.div>

        <div className="profile-sparkle" aria-hidden="true">
          <Sparkles size={15} />
        </div>
      </motion.div>
    </div>
  );
}
