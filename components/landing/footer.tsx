"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Youtube, Twitter, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { WA_NUMBER, type Copy, type Lang } from "@/lib/copy"
import { EVENT_DATE, EVENT_DATE_EN } from "@/lib/const"

interface FooterProps {
  c: Copy
  lang: Lang
}

export function Footer({ c, lang }: FooterProps) {
  const eventDate = lang === "es" ? EVENT_DATE : EVENT_DATE_EN

  return (
    <footer className="border-t border-slate-800 pt-14 pb-8 px-4 sm:px-6" style={{ backgroundColor: "#020617" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Col 1: Logo + tagline + social */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="#F97316" />
                <path d="M14 4L18 12H22L16 18L18 24L14 20L10 24L12 18L6 12H10L14 4Z" fill="white" />
              </svg>
              <span className="text-white font-black text-lg">{c.navLogo}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">{c.footerTagline}</p>
          </div>

          {/* Col 2: Event info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">{c.footerEventLabel}</h3>
            <div className="flex flex-col gap-1.5 text-sm text-slate-500">
              <p className="font-medium text-slate-300">{eventDate}</p>
              <p>{c.footerEventTime}</p>
              <p>{c.footerOnline}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {c.footerLinks.map((link) => (
                <a key={link} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors underline underline-offset-2">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: WhatsApp */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">WhatsApp</h3>
            <p className="text-sm text-slate-500">{c.footerWaTitle}</p>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white font-bold gap-2 w-fit min-h-[44px]"
              onClick={() => window.open(`https://wa.me/${WA_NUMBER}`, "_blank")}
            >
              <MessageCircle size={16} />
              {c.footerWaBtn}
            </Button>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-6" />

        <p className="text-center text-xs text-slate-700 leading-relaxed">
          {c.footerCopy}
        </p>
      </div>
    </footer>
  )
}
