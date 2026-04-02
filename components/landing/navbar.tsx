"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Copy, Lang } from "@/lib/copy"
import { trackEvent } from "@/lib/analytics"

interface NavbarProps {
  c: Copy
  lang: Lang
  setLang: (l: Lang) => void
  prefersReducedMotion: boolean
  countdown: {days:string, h: string; m: string; s: string }
}

export function Navbar({ c, lang, setLang, prefersReducedMotion, countdown }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  const handleLangToggle = (l: Lang) => {
    setLang(l)
    trackEvent("lang_toggle", { lang: l })
  }

  return (
    <motion.nav
      className="fixed top-10 left-0 right-0 z-40 transition-all duration-300"
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={
        prefersReducedMotion
          ? {}
          : scrolled
          ? { backgroundColor: "rgba(2,6,23,0.92)" }
          : { backgroundColor: "rgba(0,0,0,0)" }
      }
      style={scrolled ? { borderBottom: "1px solid rgb(30,41,59)", backdropFilter: "blur(12px)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-white font-black text-xl tracking-tight hover:opacity-90 transition-opacity"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#F97316" />
            <path d="M14 4L18 12H22L16 18L18 24L14 20L10 24L12 18L6 12H10L14 4Z" fill="white" />
          </svg>
          <span>{c.navLogo}</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {c.navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: lang toggle + countdown + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center rounded-full border border-slate-700 p-0.5 bg-slate-900/80 overflow-hidden">
            {(["es", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => handleLangToggle(l)}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 uppercase ${
                  lang === l
                    ? "bg-orange-500 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Mini countdown */}
          <span className="text-xs font-mono text-slate-400 hidden lg:block">
            {c.navCountdownLabel} 
            <span className="text-orange-400 font-bold">{countdown.days}d:{countdown.h}:{countdown.m}:{countdown.s}</span>
          </span>

          <Button
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-4"
            onClick={() => {
              scrollTo("#form")
              trackEvent("cta_click", { location: "navbar" })
            }}
          >
            {c.navCta}
          </Button>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <div className="flex items-center rounded-full border border-slate-700 p-0.5 bg-slate-900/80">
            {(["es", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => handleLangToggle(l)}
                className={`px-2.5 py-0.5 text-xs font-bold rounded-full transition-all uppercase ${
                  lang === l ? "bg-orange-500 text-white" : "text-slate-400"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-md px-4 py-4 flex flex-col gap-4"
          >
            {c.navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-base text-slate-200 hover:text-orange-400 transition-colors font-medium py-1"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full mt-2"
              onClick={() => {
                scrollTo("#form")
                trackEvent("cta_click", { location: "navbar_mobile" })
              }}
            >
              {c.navCta}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
