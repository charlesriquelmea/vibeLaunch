"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Copy } from "@/lib/copy"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

interface FAQProps {
  c: Copy
  prefersReducedMotion: boolean
}

export function FAQSection({ c, prefersReducedMotion }: FAQProps) {
  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: "#020617" }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            {c.faqTitle}
          </h2>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {c.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-slate-700/60 rounded-xl px-5 overflow-hidden hover:border-orange-500/30 transition-colors data-[state=open]:border-orange-500/40"
                style={{ backgroundColor: "#1E293B" }}
              >
                <AccordionTrigger className="text-left text-base font-semibold text-white hover:no-underline py-5 [&[data-state=open]]:text-orange-400 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 leading-relaxed pb-5 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
