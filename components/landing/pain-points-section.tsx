"use client"

import { motion } from "framer-motion"
import type { Copy } from "@/lib/copy"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const featuredVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

interface PainPointsProps {
  c: Copy
  prefersReducedMotion: boolean
}

export function PainPointsSection({ c, prefersReducedMotion }: PainPointsProps) {
  return (
    <section
      id="dolor"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: "#020617" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            {c.painTitle}
          </h2>
        </motion.div>

        {/* 5 regular pain cards + 1 featured */}
        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
        >
          {c.painPoints.map((pain, i) => (
            <motion.div
              key={i}
              variants={prefersReducedMotion ? {} : fadeUpVariants}
              className="group flex items-start gap-4 p-5 rounded-xl border border-slate-700/60 hover:border-orange-500/50 transition-colors duration-200"
              style={{ backgroundColor: "#1E293B" }}
            >
              <span className="text-2xl shrink-0 mt-0.5">{pain.icon}</span>
              <p className="text-slate-300 font-medium leading-relaxed">{pain.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured pain point (full width, glowing orange border) */}
        <motion.div
          variants={prefersReducedMotion ? {} : featuredVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative p-6 md:p-8 rounded-xl border-2 overflow-hidden"
          style={{
            backgroundColor: "#1E293B",
            borderColor: "rgba(249, 115, 22, 0.7)",
            boxShadow: "0 0 30px rgba(249, 115, 22, 0.15), 0 0 60px rgba(249, 115, 22, 0.05)",
          }}
        >
          <div className="flex items-start gap-5">
            <span className="text-3xl md:text-4xl shrink-0">🎓</span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-balance">
                {c.painFeaturedTitle}
              </h3>
              <p className="text-slate-400 italic leading-relaxed">{c.painFeaturedBody}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
