"use client"

import { motion } from "framer-motion"
import { Search, Zap, TrendingUp, Rocket } from "lucide-react"
import type { Copy } from "@/lib/copy"

const ICON_MAP: Record<string, React.ElementType> = { Search, Zap, TrendingUp, Rocket }

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

interface NextJsAdvantageProps {
  c: Copy
  prefersReducedMotion: boolean
}

export function NextJsAdvantageSection({ c, prefersReducedMotion }: NextJsAdvantageProps) {
  return (
    <section
      id="nextjs"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: "#020617" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 text-balance">
            {c.nextTitle}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {c.nextIntro}
          </p>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12"
        >
          {c.nextCards.map((card, i) => {
            const Icon = ICON_MAP[card.icon] ?? Zap
            return (
              <motion.div
                key={i}
                variants={prefersReducedMotion ? {} : fadeUpVariants}
                className="p-6 rounded-xl border border-slate-700/60 hover:border-orange-500/30 transition-colors duration-200 flex flex-col gap-4"
                style={{ backgroundColor: "#1E293B" }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 shrink-0">
                    <Icon size={20} className="text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white pt-1">{card.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm">{card.body}</p>
                <div className="mt-auto">
                  <span className="inline-flex px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-semibold">
                    {card.stat}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Authority quote */}
        <motion.blockquote
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 text-center text-lg text-slate-300 italic leading-relaxed border-t border-slate-800 pt-10 max-w-2xl mx-auto"
        >
          &ldquo;{c.nextQuote}&rdquo;
        </motion.blockquote>
      </div>
    </section>
  )
}
