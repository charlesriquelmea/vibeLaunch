"use client"

import { motion } from "framer-motion"
import { INSTRUCTOR_NAME, INSTRUCTOR_INITIALS } from "@/lib/copy"
import type { Copy, Lang } from "@/lib/copy"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

 const DANIEL_NAME = "Daniel Castiblanco"
const DANIEL_INITIALS = "DC"
/*const DANIEL_BADGE_ES = "Co-Founder & CTO"
const DANIEL_BADGE_EN = "Co-Founder & CTO"
const DANIEL_BIO_ES =
  "Ingeniero de software con 7+ años construyendo productos full-stack a escala. Especialista en arquitectura TypeScript/Angular, DevOps con Docker y productos basados en IA. Creador de Sendell, plataforma de agentes IA en producción con clientes activos."
const DANIEL_BIO_EN =
  "Software engineer with 7+ years of experience building full-stack products at scale. Specialist in TypeScript/Angular architecture, DevOps with Docker, and AI-based products. Creator of Sendell, a production AI agent platform with active clients."
 */
interface InstructorProps {
  c: Copy
  lang: Lang
  prefersReducedMotion: boolean
}

interface FounderCardProps {
  initials: string
  name: string
  badge: string
  bio: string
  stats?: { value: string; label: string }[]
  gradientFrom?: string
  gradientTo?: string
  delay?: number
  prefersReducedMotion: boolean
}

function FounderCard({
  initials,
  name,
  badge,
  bio,
  stats,
  gradientFrom = "#F97316",
  gradientTo = "#9A3412",
  delay = 0,
  prefersReducedMotion,
}: FounderCardProps) {
  return (
    <motion.div
      variants={
        prefersReducedMotion
          ? {}
          : {
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay },
              },
            }
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col items-center gap-6 rounded-2xl border border-slate-700 p-8"
      style={{ backgroundColor: "#1E293B" }}
    >
      {/* Avatar */}
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-black text-white border-2 border-orange-500/50 select-none"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          }}
          aria-label={`Foto de ${name}`}
        >
          {initials}
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-xs font-semibold text-center">
          {badge}
        </span>
      </div>

      {/* Bio */}
      <div className="flex flex-col items-center text-center gap-4 w-full">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-slate-400 leading-relaxed text-sm">{bio}</p>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 gap-3 w-full justify-between mt-2">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-3 rounded-xl border border-slate-700 text-center"
                style={{ backgroundColor: "#0F172A" }}
              >
                <span className="text-xl font-black text-orange-400 tabular-nums">{stat.value}</span>
                <span className="text-xs text-slate-500 mt-1 leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function InstructorSection({ c, lang, prefersReducedMotion }: InstructorProps) {
  const isEs = lang === "es"

  return (
    <section
      id="instructor"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">
            {c.sectionTeach}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            {c.sectionFounders}
          </h2>
        </motion.div>

        {/* Two-column founder cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FounderCard
            initials={INSTRUCTOR_INITIALS}
            name={INSTRUCTOR_NAME}
            badge={c.instructorBadge}
            bio={c.instructorBio}
            stats={c.instructorStats}
            gradientFrom="#F97316"
            gradientTo="#9A3412"
            delay={0}
            prefersReducedMotion={prefersReducedMotion}
          />
          <FounderCard
            initials={DANIEL_INITIALS}
            name={DANIEL_NAME}
            badge={c.instructorBadge}
            bio={c.instructorBio}
            stats={c.instructorStats}
            gradientFrom="#3B82F6"
            gradientTo="#1D4ED8"
            delay={0.15}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>
      </div>
    </section>
  )
}
