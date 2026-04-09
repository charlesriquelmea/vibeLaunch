"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Users, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Copy } from "@/lib/copy"
import { trackEvent } from "@/lib/analytics"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

interface ValueStackProps {
  c: Copy
  prefersReducedMotion: boolean
  countdown: {days: string, h: string; m: string; s: string }
}

export function ValueStackSection({ c, prefersReducedMotion, countdown }: ValueStackProps) {
  return (
    <section
      id="valor"
      className="py-20 px-4 sm:px-6 relative"
      style={{ backgroundColor: "#020617" }}
    >
      {/* Subtle orange glow bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(249,115,22,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10 flex flex-col gap-16">

        {/* ── Value receipt ── */}
        <div>
          <motion.div
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
              {c.valueTitle}
            </h2>
          </motion.div>

          <motion.div
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-2xl border border-slate-700 overflow-hidden"
            style={{ backgroundColor: "#1E293B" }}
          >
            <motion.ul
              variants={prefersReducedMotion ? {} : containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="divide-y divide-slate-700/60"
            >
              {c.valueItems.map((item, i) => (
                <motion.li
                  key={i}
                  
                  className="flex items-center justify-between gap-4 px-6 py-4"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-green-400 shrink-0" />
                    <span className="text-slate-300 text-sm leading-relaxed">{item.label}</span>
                  </div>
                  <StrikethroughPrice price={item.price} prefersReducedMotion={prefersReducedMotion} />
                </motion.li>
              ))}
            </motion.ul>

            <Separator className="bg-slate-700" />

            <div className="px-6 py-4 flex items-center justify-between">
              <span className="text-slate-400 font-semibold">{c.valueTotalLabel}</span>
              <span className="text-slate-400 line-through text-lg font-bold">{c.valueTotalPrice}</span>
            </div>

            <div
              className="px-6 py-5 flex items-center justify-between"
              style={{ backgroundColor: "rgba(249,115,22,0.08)" }}
            >
              <span className="text-white font-bold text-lg">{c.valueYourLabel}</span>
              <motion.span
                className="text-orange-400 font-black text-3xl"
                initial={prefersReducedMotion ? {} : { scale: 1 }}
                whileInView={prefersReducedMotion ? {} : { scale: [1, 1.08, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {c.valueYourPrice} 🔥
              </motion.span>
            </div>
          </motion.div>

          <motion.p
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-5 text-center text-sm text-slate-500 italic leading-relaxed"
          >
            {c.valueAnchor}
          </motion.p>
        </div>

        {/* ── Pricing tiers ── */}
        <div>
          <motion.div
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
              {c.pricingTitle}
            </h2>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4"
          >
            {c.pricingTiers.map((tier, i) => (
              <motion.div
                key={i}
                
                className={`rounded-xl border-2 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                  tier.highlighted
                    ? "border-orange-500 bg-orange-500/8"
                    : "border-slate-700 bg-slate-800/50"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-white text-base">{tier.label}</span>
                    <Badge
                      className={`text-xs ${
                        tier.highlighted
                          ? "bg-orange-500/20 text-orange-300 border-orange-500/40"
                          : "bg-slate-700 text-slate-300 border-slate-600"
                      }`}
                    >
                      {tier.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{tier.description}</p>
                  <p className="text-xs text-green-400 font-semibold mt-1">{tier.savings}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                  <div className="flex items-baseline gap-2">
                    <span className={`font-black text-2xl ${tier.highlighted ? "text-orange-400" : "text-white"}`}>
                      {tier.price}
                    </span>
                    <span className="text-slate-500 line-through text-sm">{tier.originalPrice}</span>
                  </div>
                  <Button
                    size="sm"
                    className={`min-h-[40px] font-bold ${
                      tier.highlighted
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "bg-slate-700 hover:bg-slate-600 text-slate-200"
                    }`}
                    onClick={() => {
                      document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })
                      trackEvent("pricing_tier_click", { tier: tier.badge })
                    }}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Growth hack ── */}
        <motion.div
          
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-2xl border border-dashed border-orange-500/40 bg-orange-500/5 p-6 flex flex-col sm:flex-row gap-5 items-start"
        >
          <div className="shrink-0 mt-1">
            <Users size={32} className="text-orange-400" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-white font-bold text-lg">{c.growthTitle}</h3>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/40 text-xs">
                {c.growthBadge}
              </Badge>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{c.growthBody}</p>
            <Button
              size="sm"
              variant="outline"
              className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 font-bold mt-1 w-fit min-h-[40px]"
              onClick={() => {
                document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })
                trackEvent("growth_hack_click", {})
              }}
            >
              {c.growthCta}
            </Button>
          </div>
        </motion.div>

        {/* ── Payment options ── */}
        <motion.div
          
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-2xl border border-slate-700 overflow-hidden"
          style={{ backgroundColor: "#1E293B" }}
        >
          <div className="px-6 py-4 border-b border-slate-700/60 flex items-center gap-2">
            <CreditCard size={18} className="text-slate-400" />
            <span className="text-white font-semibold">{c.paymentTitle}</span>
          </div>
          <div className="divide-y divide-slate-700/60">
            {c.paymentOptions.map((opt, i) => (
              <div
                key={i}
                className={`px-6 py-4 flex items-center justify-between gap-4 ${
                  opt.highlight ? "bg-green-400/5" : ""
                }`}
              >
                <span className={`text-sm font-medium ${opt.highlight ? "text-green-300" : "text-slate-300"}`}>
                  {opt.label}
                </span>
                <span className={`text-sm font-bold ${opt.highlight ? "text-green-400" : "text-white"}`}>
                  {opt.detail}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Countdown + CTA ── */}
        <motion.div
          
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-4"
        >
          <div className="text-center">
            <p className="text-sm text-slate-400 mb-2">{c.countdownLabel}</p>
            <div className="flex items-center gap-3 font-mono font-black text-3xl text-red-400">
              <FlipUnit value={countdown.days}/>
              <span className="text-slate-600">d :</span>
              <FlipUnit value={countdown.h} />
              <span className="text-slate-600">h :</span>
              <FlipUnit value={countdown.m} />
              <span className="text-slate-600"> m:</span>
              <FlipUnit value={countdown.s} />
              <span className="text-slate-600"> s</span>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-black text-base px-10 py-6 rounded-xl shadow-lg shadow-orange-500/25 min-h-[44px] w-full sm:w-auto"
            onClick={() => {
              document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })
              trackEvent("cta_click", { location: "value_stack" })
            }}
          >
            {c.finalCta}
          </Button>
        </motion.div>

      </div>
    </section>
  )
}

function StrikethroughPrice({ price, prefersReducedMotion }: { price: string; prefersReducedMotion: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (prefersReducedMotion) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add("line-through")
        }
      },
      { threshold: 1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  return (
    <span ref={ref} className="text-slate-500 font-bold text-sm shrink-0 line-through">
      {price}
    </span>
  )
}

function FlipUnit({ value }: { value: string }) {
  return (
    <span className="inline-block min-w-[2.5rem] text-center tabular-nums">{value}</span>
  )
}
