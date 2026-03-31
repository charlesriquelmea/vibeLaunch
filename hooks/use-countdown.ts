"use client"

import { useState, useEffect } from "react"

// Saturday April 25, 2026 at 10:00 AM Eastern Time
const EVENT_TARGET = new Date("2026-04-25T10:00:00-04:00").getTime()

function pad(n: number) {
  return String(n).padStart(2, "0")
}

function getSecondsLeft() {
  return Math.max(0, Math.floor((EVENT_TARGET - Date.now()) / 1000))
}

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(getSecondsLeft)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeLeft(getSecondsLeft())
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setTimeLeft(getSecondsLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [mounted])

  const days = pad(Math.floor(timeLeft / 86400))
  const h = pad(Math.floor((timeLeft % 86400) / 3600))
  const m = pad(Math.floor((timeLeft % 3600) / 60))
  const s = pad(timeLeft % 60)

  return { days, h, m, s, total: timeLeft }
}
