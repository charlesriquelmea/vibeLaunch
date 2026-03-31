"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import type { Copy } from "@/lib/copy"

interface AnnouncementBarProps {
  c: Copy
  prefersReducedMotion: boolean
}

export function AnnouncementBar({ c, prefersReducedMotion }: AnnouncementBarProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    const formSection = document.getElementById("form")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Duplicate content for seamless loop
  const text = `${c.announcementBar}  ·  ${c.announcementBar}  ·  `

  return (
    <div
      className="bg-orange-500 text-white cursor-pointer overflow-hidden relative h-10 flex items-center"
      onClick={handleClick}
      role="banner"
      aria-label={c.announcementBar}
    >
      <div ref={containerRef} className="flex items-center whitespace-nowrap">
        {prefersReducedMotion ? (
          <span className="px-4 text-sm font-semibold">{c.announcementBar}</span>
        ) : (
          <motion.div
            className="flex items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            whileHover={{ animationPlayState: "paused" } as never}
            style={{ display: "flex" }}
          >
            <span className="text-sm font-semibold tracking-wide pr-8">{text}</span>
            <span className="text-sm font-semibold tracking-wide pr-8">{text}</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}
