"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LeadCaptureForm } from "./lead-capture-form"
import type { Copy, Lang } from "@/lib/copy"
import { trackEvent } from "@/lib/analytics"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

interface FormSectionProps {
  c: Copy
  lang: Lang
  prefersReducedMotion: boolean
}

export function FormSection({ c, lang, prefersReducedMotion }: FormSectionProps) {
  return (
    <section
      id="form"
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="max-w-lg mx-auto">
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-2"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-balance">
            {c.formTitle}
          </h2>
          <p className="text-sm text-slate-500">{c.formSubtitle}</p>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6"
        >
          {/* Top rounded border */}
          <div className="h-1 rounded-t-2xl bg-orange-500" />
          <LeadCaptureForm c={c} lang={lang} prefersReducedMotion={prefersReducedMotion} />
        </motion.div>
      </div>
    </section>
  )
}

interface FinalCTASectionProps {
  c: Copy
  prefersReducedMotion: boolean
  countdown: { h: string; m: string; s: string }
}

export function FinalCTASection({ c, prefersReducedMotion, countdown }: FinalCTASectionProps) {
  const [displayed, setDisplayed] = useState("")
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(c.finalTypewriterPhrases[0])
      return
    }
    const phrases = c.finalTypewriterPhrases
    const currentPhrase = phrases[phraseIdx]

    if (isPaused) {
      timeoutRef.current = setTimeout(() => { setIsPaused(false); setIsDeleting(true) }, 2200)
      return
    }
    if (isDeleting) {
      if (displayed.length === 0) {
        timeoutRef.current = setTimeout(() => { setIsDeleting(false); setPhraseIdx((i) => (i + 1) % phrases.length) }, 400)
      } else {
        timeoutRef.current = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), 25)
      }
    } else {
      if (displayed.length === currentPhrase.length) {
        setIsPaused(true)
      } else {
        timeoutRef.current = setTimeout(() => setDisplayed(currentPhrase.slice(0, displayed.length + 1)), 45)
      }
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayed, isDeleting, isPaused, phraseIdx, prefersReducedMotion])

  return (
    <section
      id="final-cta"
      className="py-20 px-4 sm:px-6 text-center"
      style={{ backgroundColor: "#020617" }}
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
        <motion.h2
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-3xl md:text-5xl font-black text-white tracking-tight text-balance"
        >
          {c.finalTitle}
        </motion.h2>

        <motion.p
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-xl text-slate-300 font-medium min-h-[2rem]"
        >
          {displayed}
          <motion.span
            className="text-orange-400"
            animate={prefersReducedMotion ? {} : { opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.p>

        {/* Countdown */}
        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-sm text-slate-400">{c.countdownLabel}</p>
          <div className="flex items-center gap-2 font-mono font-black text-4xl md:text-5xl text-red-400">
            <span className="tabular-nums">{countdown.h}</span>
            <span className="text-slate-700">:</span>
            <span className="tabular-nums">{countdown.m}</span>
            <span className="text-slate-700">:</span>
            <span className="tabular-nums">{countdown.s}</span>
          </div>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? {} : fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-3 w-full"
        >
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-12 py-7 rounded-xl shadow-xl shadow-orange-500/30 w-full sm:w-auto hover:scale-[1.02] transition-all min-h-[44px]"
            onClick={() => {
              document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })
              document.getElementById("form-input")?.focus()
              trackEvent("cta_click", { location: "final_cta" })
            }}
          >
            {c.finalCta}
          </Button>
          <p className="text-xs text-slate-500">{c.finalMicro}</p>
          <p className="text-sm text-orange-400 font-semibold">{c.finalSocial}</p>
        </motion.div>
      </div>
    </section>
  )
}

interface StickyBarProps {
  c: Copy
  prefersReducedMotion: boolean
  countdown: {days:string , h: string; m: string; s: string }
}

export function StickyBar({ c, prefersReducedMotion, countdown }: StickyBarProps) {
  const [visible, setVisible] = useState(false)
  const [formInView, setFormInView] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const formEl = document.getElementById("form")
    if (!formEl) return
    const observer = new IntersectionObserver(([entry]) => setFormInView(entry.isIntersecting), { threshold: 0.2 })
    observer.observe(formEl)
    return () => observer.disconnect()
  }, [])

  const show = visible && !formInView

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 backdrop-blur-md"
          style={{ backgroundColor: "rgba(15,23,42,0.95)" }}
        >
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-slate-300 font-medium text-center sm:text-left">
              {c.stickyText}{" "}
              <span className="text-red-400 font-mono font-bold">
                {countdown.days}d:{countdown.h}:{countdown.m}:{countdown.s}
              </span>
            </p>
            <Button
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold shrink-0 min-h-[44px] px-6"
              onClick={() => {
                document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })
                trackEvent("cta_click", { location: "sticky_bar" })
              }}
            >
              {c.stickyBtn}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
