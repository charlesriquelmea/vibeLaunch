"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { Copy } from "@/lib/copy"
import { trackEvent } from "@/lib/analytics"

const CODE_PARTICLES = [
  { text: "npx create-next-app", top: "8%", left: "5%" },
  { text: "vercel deploy", top: "15%", left: "78%" },
  { text: "git push origin main", top: "30%", left: "88%" },
  { text: "npm run build", top: "55%", left: "2%" },
  { text: "export default function Page()", top: "70%", left: "80%" },
  { text: "<motion.div>", top: "20%", left: "60%" },
  { text: "await fetch()", top: "80%", left: "12%" },
  { text: "const [state, setState]", top: "42%", left: "75%" },
  { text: "useEffect(() => {})", top: "65%", left: "55%" },
  { text: "className='flex'", top: "88%", left: "40%" },
]

const PARTICLE_DURATIONS = [22, 18, 28, 15, 25, 20, 30, 17, 24, 19]

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

interface HeroProps {
  c: Copy
  prefersReducedMotion: boolean
}

function TypewriterEffect({ prefix, phrases, prefersReducedMotion }: { prefix: string; phrases: string[]; prefersReducedMotion: boolean }) {
  const [displayed, setDisplayed] = useState("")
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(phrases[0])
      return
    }

    const currentPhrase = phrases[phraseIdx]

    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 2200)
      return
    }

    if (isDeleting) {
      if (displayed.length === 0) {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(false)
          setPhraseIdx((i) => (i + 1) % phrases.length)
        }, 400)
      } else {
        timeoutRef.current = setTimeout(() => {
          setDisplayed((d) => d.slice(0, -1))
        }, 28)
      }
    } else {
      if (displayed.length === currentPhrase.length) {
        setIsPaused(true)
      } else {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(currentPhrase.slice(0, displayed.length + 1))
        }, 55)
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayed, isDeleting, isPaused, phraseIdx, phrases, prefersReducedMotion])

  return (
    <p className="text-lg md:text-xl text-slate-300 font-medium mt-4">
      <span className="text-slate-400">{prefix} </span>
      <span className="text-white">{displayed}</span>
      <motion.span
        className="text-orange-400 ml-0.5"
        animate={prefersReducedMotion ? {} : { opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      >
        |
      </motion.span>
    </p>
  )
}

function BrowserMockup({ c, prefersReducedMotion }: { c: Copy; prefersReducedMotion: boolean }) {
  const [terminalLine, setTerminalLine] = useState(0)
  const [terminalText, setTerminalText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (prefersReducedMotion) {
      setTerminalText(c.terminalLines.join("\n"))
      setTerminalLine(c.terminalLines.length)
      return
    }

    let charIdx = 0
    const currentLine = c.terminalLines[terminalLine] ?? ""

    if (terminalLine >= c.terminalLines.length) return

    const interval = setInterval(() => {
      if (charIdx < currentLine.length) {
        setTerminalText((prev) => prev + currentLine[charIdx])
        charIdx++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setTerminalText((prev) => prev + "\n")
          setTerminalLine((l) => l + 1)
        }, 400)
      }
    }, 40)

    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terminalLine, prefersReducedMotion])

  return (
    <motion.div
      className="relative w-full"
      animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Browser window */}
      <div className="rounded-xl border border-slate-700 shadow-2xl overflow-hidden" style={{ transform: "rotate(-2deg)" }}>
        {/* Browser chrome */}
        <div className="bg-slate-800 px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
          </div>
          <div className="flex-1 bg-slate-700/60 rounded-md px-3 py-1 text-xs text-slate-400 font-mono">
            {c.browserUrl}
          </div>
        </div>

        {/* Browser content */}
        <div className="bg-slate-900 p-5 min-h-[220px] relative overflow-hidden">
          {/* Skeleton shimmer */}
          <div className="h-16 rounded-lg mb-4 overflow-hidden bg-slate-800 relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/30 to-transparent"
              animate={prefersReducedMotion ? {} : { x: ["-100%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="space-y-2 mb-5">
            <div className="h-3 bg-slate-800 rounded w-3/4" />
            <div className="h-3 bg-slate-800 rounded w-1/2" />
            <div className="h-3 bg-slate-800 rounded w-5/6" />
          </div>
          <div className="h-10 bg-orange-500/80 rounded-lg w-2/3" />

          {/* Vercel badge */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-slate-800/90 rounded-full px-3 py-1.5 border border-slate-700">
            <motion.div
              className="w-2 h-2 rounded-full bg-green-400"
              animate={prefersReducedMotion ? {} : { opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs text-slate-300 font-mono">{c.vercelBadge}</span>
          </div>
        </div>
      </div>

      {/* Terminal overlay */}
      <div
        className="absolute -bottom-8 -left-6 w-72 bg-black rounded-lg border border-green-500/50 p-3 font-mono text-xs shadow-2xl z-10"
        style={{ transform: "rotate(3deg)" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-slate-600 ml-1">terminal</span>
        </div>
        <pre className="text-green-400 leading-relaxed whitespace-pre-wrap break-all text-[10px]">
          {terminalText}
          {terminalLine < c.terminalLines.length && isTyping && (
            <motion.span
              className="text-green-400"
              animate={prefersReducedMotion ? {} : { opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              ▊
            </motion.span>
          )}
        </pre>
      </div>
    </motion.div>
  )
}

export function HeroSection({ c, prefersReducedMotion }: HeroProps) {
  const words = c.headline.split(" ")

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
      style={{ backgroundColor: "#020617" }}
    >
      {/* Code particles */}
      {!prefersReducedMotion &&
        CODE_PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-slate-300 pointer-events-none select-none"
            style={{ top: p.top, left: p.left, opacity: 0.04 }}
            animate={{ y: [0, -30, 0] }}
            transition={{
              duration: PARTICLE_DURATIONS[i],
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          >
            {p.text}
          </motion.div>
        ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left column — 55% */}
          <div className="flex-1 lg:w-[55%] max-w-2xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5"
            >
              {/* Eyebrow badge */}
              <motion.div variants={fadeUpVariants}>
                <span className="inline-flex items-center px-4 py-2 rounded-full border border-orange-500/60 bg-orange-500/10 text-orange-400 text-sm font-semibold">
                  {c.eyebrow}
                </span>
              </motion.div>

              {/* H1 with word stagger */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={prefersReducedMotion ? {} : wordVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: i * 0.05 }}
                    className="inline-block mr-3 mb-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Typewriter */}
              <TypewriterEffect
                prefix={c.typewriterPrefix}
                phrases={c.typewriterPhrases}
                prefersReducedMotion={prefersReducedMotion}
              />

              {/* Subheadline */}
              <motion.p
                variants={fadeUpVariants}
                className="text-lg text-slate-400 leading-relaxed max-w-lg"
              >
                {c.subheadline}
              </motion.p>

              {/* Trust signals */}
              <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-4 text-sm">
                {c.trustSignals.map((t, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <span>{t.icon}</span>
                    <span>{t.text}</span>
                    {i < c.trustSignals.length - 1 && (
                      <span className="text-slate-600 ml-2">|</span>
                    )}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-black text-base px-8 py-6 rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] hover:shadow-orange-500/40 min-h-[44px]"
                  onClick={() => {
                    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })
                    document.getElementById("form-input")?.focus()
                    trackEvent("cta_click", { location: "hero_primary" })
                  }}
                >
                  {c.heroCta}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 font-semibold rounded-xl min-h-[44px]"
                  onClick={() => {
                    document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {c.heroSecondary}
                </Button>
              </motion.div>

              {/* Micro-copy */}
              <motion.p variants={fadeUpVariants} className="text-xs text-slate-500 leading-relaxed">
                {c.heroCopy}
              </motion.p>
            </motion.div>
          </div>

          {/* Right column — 45% */}
          <motion.div
            className="flex-1 lg:w-[45%] w-full max-w-md lg:max-w-none pb-12 lg:pb-0"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <BrowserMockup c={c} prefersReducedMotion={prefersReducedMotion} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
