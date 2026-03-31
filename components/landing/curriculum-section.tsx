"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import type { Copy } from "@/lib/copy"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

interface CurriculumProps {
  c: Copy
  prefersReducedMotion: boolean
}

export function CurriculumSection({ c, prefersReducedMotion }: CurriculumProps) {
  return (
    <section
      id="curriculum"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            {c.curriculumTitle}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 origin-top"
            initial={prefersReducedMotion ? {} : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="flex flex-col gap-10">
            {c.modules.map((mod, i) => {
              const isOdd = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  variants={prefersReducedMotion ? {} : {
                    hidden: { opacity: 0, x: isOdd ? -40 : 40 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="flex items-start gap-6 md:gap-8 pl-16 md:pl-0 relative"
                >
                  {/* Dot on the line */}
                  <div
                    className="absolute left-5 md:left-1/2 top-2 w-4 h-4 rounded-full border-2 border-orange-500 bg-slate-950 z-10 -translate-x-1/2 shrink-0"
                  />

                  {/* Card — full width on mobile, alternating sides on desktop */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      isOdd ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8 md:text-right"
                    }`}
                  >
                    <div
                      className="p-5 rounded-xl border border-slate-700/60 hover:border-orange-500/30 transition-colors"
                      style={{ backgroundColor: "#1E293B" }}
                    >
                      {/* Time + duration */}
                      <div className={`flex items-center gap-2 mb-3 flex-wrap ${!isOdd ? "md:justify-end" : ""}`}>
                        <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2 py-1 rounded-md border border-orange-500/20">
                          {mod.time}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">({mod.duration})</span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3">{mod.title}</h3>

                      <div className="flex flex-col gap-2">
                        <div className={`flex items-start gap-2 flex-wrap ${!isOdd ? "md:justify-end" : ""}`}>
                          <Badge className="bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 text-xs shrink-0">
                            {c.learnBadge}
                          </Badge>
                          <span className="text-sm text-slate-400 leading-relaxed">{mod.learn}</span>
                        </div>
                        <div className={`flex items-start gap-2 flex-wrap ${!isOdd ? "md:justify-end" : ""}`}>
                          <Badge className="bg-green-400/10 text-green-300 border border-green-400/30 text-xs shrink-0">
                            {c.leaveBadge}
                          </Badge>
                          <span className="text-sm text-slate-300 leading-relaxed font-medium">{mod.leave}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
