"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Copy } from "@/lib/copy"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

interface GuaranteeProps {
  c: Copy
  prefersReducedMotion: boolean
}

export function GuaranteeSection({ c, prefersReducedMotion }: GuaranteeProps) {
  return (
    <section
      id="garantia"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: "#020617" }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Card
            className="border-2 rounded-2xl overflow-hidden"
            style={{
              borderColor: "rgba(74,222,128,0.5)",
              backgroundColor: "#0F172A",
              boxShadow: "0 0 40px rgba(74,222,128,0.08), 0 0 80px rgba(74,222,128,0.03)",
            }}
          >
            <CardContent className="p-8 md:p-10 flex flex-col items-center text-center gap-6">
              <ShieldCheck size={56} className="text-green-400 shrink-0" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                  {c.guaranteeTitle}
                </h2>
                <p className="text-slate-400 leading-relaxed text-base whitespace-pre-line">
                  {c.guaranteeBody}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
