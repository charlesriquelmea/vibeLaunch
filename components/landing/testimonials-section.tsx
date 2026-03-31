"use client"

import { useRef } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import type { Copy } from "@/lib/copy"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

interface TestimonialsProps {
  c: Copy
  prefersReducedMotion: boolean
}

export function TestimonialsSection({ c, prefersReducedMotion }: TestimonialsProps) {
  return (
    <section
      id="testimonios"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: "#0F172A" }}
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
            {c.testimonialTitle}
          </h2>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {c.testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              testimonial={t}
              beforeLabel={c.beforeLabel}
              duringLabel={c.duringLabel}
              afterLabel={c.afterLabel}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 text-center text-sm text-slate-400 leading-relaxed border-t border-slate-800 pt-8"
        >
          {c.statsBar}
        </motion.div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: { before: string; during: string; after: string; author: string; role: string }
  beforeLabel: string
  duringLabel: string
  afterLabel: string
  prefersReducedMotion: boolean
}

function TestimonialCard({ testimonial, beforeLabel, duringLabel, afterLabel, prefersReducedMotion }: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-6, 6]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      style={
        prefersReducedMotion
          ? { backgroundColor: "#1E293B" }
          : ({ rotateX, rotateY, transformStyle: "preserve-3d", backgroundColor: "#1E293B" } as React.CSSProperties)
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col gap-4 p-6 rounded-xl border border-slate-700/60 hover:border-orange-500/30 transition-colors duration-200 cursor-default"
    >
      <div className="flex flex-col gap-3">
        <div>
          <Badge className="bg-red-500/15 text-red-400 border border-red-500/30 text-xs mb-2">{beforeLabel}</Badge>
          <p className="text-slate-400 text-sm leading-relaxed italic">&ldquo;{testimonial.before}&rdquo;</p>
        </div>
        <div>
          <Badge className="bg-yellow-500/15 text-yellow-400 border border-yellow-500/30 text-xs mb-2">{duringLabel}</Badge>
          <p className="text-slate-300 text-sm leading-relaxed italic">&ldquo;{testimonial.during}&rdquo;</p>
        </div>
        <div>
          <Badge className="bg-green-500/15 text-green-400 border border-green-500/30 text-xs mb-2">{afterLabel}</Badge>
          <p className="text-white text-sm leading-relaxed font-semibold">&ldquo;{testimonial.after}&rdquo;</p>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-slate-700/60">
        <p className="text-white font-bold text-sm">{testimonial.author}</p>
        <p className="text-slate-500 text-xs">{testimonial.role}</p>
      </div>
    </motion.div>
  )
}
