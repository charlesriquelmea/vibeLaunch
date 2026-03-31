"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import type { Copy } from "@/lib/copy"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

interface VibeCodingProps {
  c: Copy
  prefersReducedMotion: boolean
}

export function VibeCodingSection({ c, prefersReducedMotion }: VibeCodingProps) {
  return (
    <section
      id="metodo"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 text-balance">
            {c.vibeTitle}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {c.vibeIntro}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-10 mb-14"
        >
          {c.vibeSteps.map((step, i) => (
            <motion.div
              key={i}
              variants={prefersReducedMotion ? {} : fadeUpVariants}
              className="flex items-start gap-6"
            >
              <span
                className="text-5xl md:text-6xl font-black leading-none shrink-0 select-none"
                style={{ color: "#F97316", minWidth: "3.5rem" }}
              >
                {step.num}
              </span>
              <div className="pt-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Alert box */}
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Alert className="border-cyan-400/40 bg-cyan-400/5 rounded-xl">
            <AlertTitle className="text-cyan-300 font-bold text-base mb-3">
              {c.alertTitle}
            </AlertTitle>
            <AlertDescription>
              <ul className="flex flex-col gap-3">
                {c.alertBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>
    </section>
  )
}
