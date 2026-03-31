"use client"

import { motion } from "framer-motion"
import type { Copy } from "@/lib/copy"

const TECH_BADGES = ["Next.js", "Vercel", "Tailwind CSS", "v0.app", "Cursor", "Claude AI", "Framer Motion"]

interface TechTickerProps {
  c: Copy
  prefersReducedMotion: boolean
}

export function TechTicker({ c, prefersReducedMotion }: TechTickerProps) {
  const items = [...TECH_BADGES, ...TECH_BADGES]

  return (
    <div className="bg-slate-800 py-4 overflow-hidden border-y border-slate-700">
      <div className="flex items-center gap-6">
        <span className="text-slate-400 text-sm font-semibold whitespace-nowrap pl-6 shrink-0">
          {c.tickerPrefix}
        </span>
        <div className="flex-1 overflow-hidden">
          {prefersReducedMotion ? (
            <div className="flex flex-wrap gap-2 px-4">
              {TECH_BADGES.map((badge) => (
                <TechBadge key={badge} label={badge} />
              ))}
            </div>
          ) : (
            <motion.div
              className="flex items-center gap-4 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {items.map((badge, i) => (
                <TechBadge key={i} label={badge} />
              ))}
            </motion.div>
          )}
        </div>
        <span className="text-slate-500 text-xs whitespace-nowrap pr-6 shrink-0 hidden sm:block">
          {c.tickerSuffix}
        </span>
      </div>
    </div>
  )
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-slate-600 bg-slate-700/50 text-slate-200 text-sm font-semibold font-mono whitespace-nowrap shrink-0">
      {label}
    </span>
  )
}
