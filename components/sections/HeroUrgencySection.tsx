"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { useCountdown } from "@/hooks/useCountdown"
import { type Copy, ENROLLED_THIS_WEEK, SPOTS_AVAILABLE } from "@/lib/copy"

interface HeroUrgencySectionProps {
  c: Copy
  prefersReducedMotion: boolean
}

export default function HeroUrgencySection({ c, prefersReducedMotion }: HeroUrgencySectionProps) {
  const h = c.heroUrgency
  const shouldReduceMotion = useReducedMotion() || prefersReducedMotion
  const countdown = useCountdown("2026-04-11T23:59:00")

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1, y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0 : 0.6, 
        delay: i * 0.1, 
        ease: [0.16, 1, 0.3, 1] 
      }
    })
  }

  // Marquee items duplicated for seamless loop
  const marqueeItems = [...h.marqueeItems, ...h.marqueeItems]

  return (
    <section className="relative w-full bg-[#09090b] text-[#fafafa] font-sans selection:bg-blue-500/30 overflow-hidden pt-4 pb-24 border-b border-white/5">
      {/* Block 1 — Top Urgency Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-amber-500/10 border-b border-amber-500/20 py-2.5 text-center px-4"
      >
        <span className="text-amber-400 text-sm font-mono tracking-tight inline-flex items-center gap-2">
          {h.banner}
        </span>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Block 2 — Background Code Lines (Decorative) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none hidden md:block">
          {[
            "$ npx create-next-app@latest mi-proyecto",
            "▲ Deployed to https://mi-proyecto.vercel.app",
            "npm run build — compiled in 2.1s",
            "✓ Generating static pages (12/12)",
            "git push origin main",
            "Route (app) — /dashboard  3.2 kB"
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.05,
                y: shouldReduceMotion ? 0 : [-10, 10, -10] 
              }}
              transition={{ 
                opacity: { duration: 1 },
                y: { 
                  duration: 8 + i * 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                } 
              }}
              className="absolute font-mono text-xs text-zinc-700"
              style={{
                top: `${10 + i * 14}%`,
                left: i % 2 === 0 ? "4%" : "72%",
              }}
            >
              {line}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 space-y-28 md:space-y-40">
          
          {/* Block 3 — Wake-up Call (h1) */}
          <div className="text-center space-y-6">
            <motion.h1 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="text-4xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] text-balance"
            >
              {h.wakeupLine1}
            </motion.h1>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={1}
              className="text-zinc-400 text-lg md:text-2xl font-normal max-w-2xl mx-auto text-balance"
            >
              {h.wakeupLine2}
            </motion.p>
          </div>

          {/* Block 4 — Impact Math Block (diff terminal) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#18181b] border border-zinc-800 rounded-3xl p-6 md:p-10 max-w-3xl mx-auto font-mono shadow-2xl relative overflow-hidden"
          >
            <div className="flex gap-1.5 mb-8">
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
            </div>

            <div className="text-zinc-600 text-xs mb-6 uppercase tracking-[0.2em] font-medium">
              {h.mathHeader}
            </div>
            
            <div className="space-y-4">
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-red-500/5 border-l-2 border-red-500/60 px-5 py-4 rounded-r-xl"
              >
                <code className="text-red-400/90 text-sm md:text-[15px] leading-relaxed block">
                  {h.mathRed}
                </code>
              </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="bg-green-500/5 border-l-2 border-green-500 px-5 py-4 rounded-r-xl"
              >
                <code className="text-teal-400 text-sm md:text-[15px] leading-relaxed block">
                  {h.mathGreen}
                </code>
              </motion.div>
            </div>
          </motion.div>

          {/* Block 5 — Operational Cost Table */}
          <div className="space-y-10">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-zinc-500 text-xs uppercase tracking-[0.3em] font-bold text-center"
            >
              {h.tableTitle}
            </motion.h3>
            
            <div className="hidden md:block overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm max-w-4xl mx-auto shadow-xl">
              <table className="w-full text-left text-[13px] border-collapse">
                <thead>
                  <tr className="bg-zinc-900/60 border-b border-zinc-800">
                    {h.tableHeaders.map((header: string, i: number) => (
                      <th key={i} className="px-8 py-5 font-bold text-zinc-400 uppercase tracking-widest text-[11px]">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/40">
                  {h.tableRows.map((row: string[], rowIndex: number) => (
                    <motion.tr 
                      key={rowIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.08 * rowIndex }}
                      className="group hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-8 py-6 text-zinc-300 font-medium">{row[0]}</td>
                      <td className="px-8 py-6 text-zinc-500 group-hover:text-zinc-400 transition-colors">{row[1]}</td>
                      <td className="px-8 py-6 text-teal-400 bg-teal-500/[0.04] font-semibold">{row[2]}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-6">
              {h.tableRows.map((row: string[], i: number) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity:0, scale:0.98 }}
                  whileInView={{ opacity:1, scale:1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl space-y-5"
                >
                  <div className="text-zinc-100 font-bold text-lg leading-tight">{row[0]}</div>
                  <div className="space-y-4">
                    <div className="bg-zinc-800/20 p-3 rounded-lg border border-zinc-800/50">
                      <div className="text-zinc-600 font-mono uppercase text-[9px] mb-1 tracking-wider">{h.tableHeaders[1]}</div>
                      <div className="text-zinc-400 text-sm leading-snug">{row[1]}</div>
                    </div>
                    <div className="bg-teal-500/[0.03] p-3 rounded-lg border border-teal-500/10">
                      <div className="text-teal-500/70 font-mono uppercase text-[9px] mb-1 tracking-wider">{h.tableHeaders[2]}</div>
                      <div className="text-teal-400 font-bold text-sm leading-snug">{row[2]}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Block 6 — Tech Stack Marquee */}
          <div className="space-y-8 pt-8 overflow-hidden">
            <p className="text-zinc-600 text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-center">
              {h.marqueeLabel}
            </p>
            <div className="relative flex py-2 group">
              <motion.div 
                animate={{ x: shouldReduceMotion ? 0 : ["0%", "-50%"] }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="flex gap-4 min-w-max px-4"
              >
                {marqueeItems.map((item, i) => (
                  <span 
                    key={i} 
                    className="bg-zinc-900 border border-zinc-800/50 text-zinc-400 text-xs font-mono px-6 py-3 rounded-2xl hover:border-zinc-700 hover:text-zinc-200 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent z-20" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#09090b] via-[#09090b]/80 to-transparent z-20" />
            </div>
          </div>

          {/* Block 7 — Risk Projection (2 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-10 px-2 lg:px-0">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group border border-zinc-800/60 rounded-3xl p-8 bg-zinc-900/30 hover:border-zinc-700/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="text-zinc-600 text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] mb-6">
                {h.riskTitleNow}
              </div>
              <ul className="space-y-6">
                {h.riskItemsNow.map((item, i) => (
                  <li key={i} className="text-zinc-400 text-[15px] leading-relaxed flex items-start gap-4">
                    <span className="shrink-0 scale-125 pt-0.5">{item.split(' ')[0]}</span>
                    <span>{item.split(' ').slice(1).join(' ')}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-zinc-500/5 blur-[80px] -mr-16 -mb-16" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group border border-red-500/20 rounded-3xl p-8 bg-red-500/[0.01] hover:bg-red-500/[0.03] hover:border-red-500/40 transition-all duration-500 relative overflow-hidden shadow-2xl shadow-red-500/5"
            >
              <div className="text-red-400/70 text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] mb-6">
                {h.riskTitleFuture}
              </div>
              <ul className="space-y-6">
                {h.riskItemsFuture.map((item, i) => (
                  <li key={i} className="text-zinc-300 text-[15px] leading-relaxed flex items-start gap-4 font-medium">
                    <span className="shrink-0 scale-125 pt-0.5">{item.split(' ')[0]}</span>
                    <span>{item.split(' ').slice(1).join(' ')}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-500/10 blur-[80px] -mr-16 -mb-16" />
            </motion.div>
          </div>

          {/* Block 8 & 9 — Social Proof & CTA */}
          <div className="space-y-16 text-center py-10 scale-100 md:scale-105 transition-transform">
            <div className="space-y-3">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-amber-400/90 text-[15px] font-mono font-bold"
              >
                {h.socialProof1}
              </motion.p>
              <p className="text-zinc-500 text-[11px] uppercase tracking-[0.3em] font-black opacity-60">
                {h.socialProof2}
              </p>
            </div>

            <div className="max-w-xl mx-auto space-y-12 px-2 md:px-0">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white balance leading-tight"
              >
                {h.ctaHeadline}
              </motion.h2>

              <div className="space-y-8">
                <motion.div
                  whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                  whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
                  className="relative group"
                >
                  <Link
                    href="#form"
                    className="flex items-center justify-center w-full h-18 md:h-20 rounded-2xl font-black bg-blue-600 hover:bg-blue-500 text-white text-xl transition-all shadow-[0_0_0_rgba(59,130,246,0)] hover:shadow-[0_0_48px_rgba(59,130,246,0.5)] px-8 md:px-12 border-b-4 border-blue-800 group-hover:border-blue-700 active:border-b-0"
                  >
                    {h.ctaButton}
                  </Link>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  {h.trustLines.map((line, i) => (
                    <motion.span 
                      key={i} 
                      initial={{ opacity:0 }}
                      whileInView={{ opacity:1 }}
                      transition={{ delay: 0.1 * i }}
                      className="text-zinc-500 text-[11px] font-bold uppercase tracking-wider flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-500" /> {line}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Block 10 — Countdown Timer */}
          <div className="pt-24 border-t border-zinc-900/50 pb-16">
            <div className="max-w-2xl mx-auto text-center space-y-12">
              <p className="text-amber-400 text-xs md:text-sm uppercase tracking-[0.5em] font-black">
                {h.countdownLabel}
              </p>
              
              <div className="grid grid-cols-4 gap-3 md:gap-8">
                {[
                  { label: "DD", value: countdown.days },
                  { label: "HH", value: countdown.hours },
                  { label: "MM", value: countdown.minutes },
                  { label: "SS", value: countdown.seconds }
                ].map((unit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="bg-zinc-950 border border-zinc-800/80 p-4 md:p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                      <div className="font-mono text-3xl md:text-6xl font-bold text-amber-400 tabular-nums tracking-tighter">
                        {unit.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-zinc-600 text-[9px] md:text-[11px] mt-3 font-black tracking-[0.3em] uppercase opacity-70">
                        {unit.label}
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-amber-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute -inset-1 bg-amber-500/5 blur-xl -z-10 rounded-3xl" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
