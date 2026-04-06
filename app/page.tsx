"use client"

import { useState, useEffect } from "react"
import { copy } from "@/lib/copy"
import type { Lang } from "@/lib/copy"
import { useCountdown } from "@/hooks/use-countdown"

import { AnnouncementBar } from "@/components/landing/announcement-bar"
import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { TechTicker } from "@/components/landing/tech-ticker"
import { PainPointsSection } from "@/components/landing/pain-points-section"
import { VibeCodingSection } from "@/components/landing/vibe-coding-section"
import { NextJsAdvantageSection } from "@/components/landing/nextjs-advantage-section"
import { CurriculumSection } from "@/components/landing/curriculum-section"
import { ValueStackSection } from "@/components/landing/value-stack-section"
import { GuaranteeSection } from "@/components/landing/guarantee-section"
import { CredibilitySection } from "@/components/landing/credibility-section"
import { InstructorSection } from "@/components/landing/instructor-section"
import { FAQSection } from "@/components/landing/faq-section"
import { FormSection, FinalCTASection, StickyBar } from "@/components/landing/form-and-cta"
import { Footer } from "@/components/landing/footer"
import HeroUrgencySection from "@/components/sections/HeroUrgencySection"

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>("es")
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const countdown = useCountdown()

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const c = copy[lang]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#020617" }}>
      <AnnouncementBar c={c} prefersReducedMotion={prefersReducedMotion} />
      <Navbar
        c={c}
        lang={lang}
        setLang={setLang}
        prefersReducedMotion={prefersReducedMotion}
        countdown={countdown}
      />
      <main>
        <HeroSection c={c} prefersReducedMotion={prefersReducedMotion} />
        <TechTicker c={c} prefersReducedMotion={prefersReducedMotion} />
        <PainPointsSection c={c} prefersReducedMotion={prefersReducedMotion} />
        <VibeCodingSection c={c} prefersReducedMotion={prefersReducedMotion} />
        <NextJsAdvantageSection c={c} prefersReducedMotion={prefersReducedMotion} />
        <CurriculumSection c={c} prefersReducedMotion={prefersReducedMotion} />
        <ValueStackSection c={c} prefersReducedMotion={prefersReducedMotion} countdown={countdown} />
        <HeroUrgencySection c={c} prefersReducedMotion={prefersReducedMotion} countdown={countdown} />
        {/* TestimonialsSection hidden per product update — re-enable when real testimonials are ready */}
        <GuaranteeSection c={c} prefersReducedMotion={prefersReducedMotion} />
        <CredibilitySection c={c} prefersReducedMotion={prefersReducedMotion} />
        <InstructorSection c={c} prefersReducedMotion={prefersReducedMotion} />
        <FAQSection c={c} prefersReducedMotion={prefersReducedMotion} />
        <FormSection c={c} lang={lang} prefersReducedMotion={prefersReducedMotion} />
        <FinalCTASection c={c} prefersReducedMotion={prefersReducedMotion} countdown={countdown} />
      </main>
      <Footer c={c} lang={lang} />
      <StickyBar c={c} prefersReducedMotion={prefersReducedMotion} countdown={countdown} />
    </div>
  )
}
