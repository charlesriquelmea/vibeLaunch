"use client"

import { motion } from "framer-motion"
import { Building2, Wrench, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Copy } from "@/lib/copy"

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Wrench,
  Star,
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

interface CredibilityProps {
  c: Copy
  prefersReducedMotion: boolean
}

export function CredibilitySection({ c, prefersReducedMotion }: CredibilityProps) {
  return (
    <section
      id="credibilidad"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: "#020617" }}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-2">
            {c.credibilityTitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            {c.credibilitySubtitle}
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {c.credibilityCards.map((card, i) => {
            const Icon = iconMap[card.icon] ?? Star
            return (
              <motion.div
                key={i}
                variants={prefersReducedMotion ? {} : fadeUpVariants}
              >
                <Card
                  className="h-full border rounded-2xl overflow-hidden"
                  style={{
                    borderColor: "rgb(30,41,59)",
                    backgroundColor: "#0F172A",
                  }}
                >
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(249,115,22,0.12)" }}
                    >
                      <Icon size={20} className="text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-2 text-balance">
                        {card.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
