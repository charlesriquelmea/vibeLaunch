"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Copy, Lang } from "@/lib/copy"
import { WA_NUMBER } from "@/lib/copy"
import { trackEvent } from "@/lib/analytics"

// Steps: 0=intro, 1=name, 2=phone, 3=access tier, 4=level, 5=loading
const TOTAL_STEPS = 4

const slideIn = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }),
}

interface FormProps {
  c: Copy
  lang: Lang
  prefersReducedMotion: boolean
}

export function LeadCaptureForm({ c, lang, prefersReducedMotion }: FormProps) {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [accessTier, setAccessTier] = useState("")
  const [level, setLevel] = useState("")
  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [loadingIdx, setLoadingIdx] = useState(0)
  const [done, setDone] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  const advance = () => {
    setDirection(1)
    setStep((s) => s + 1)
    trackEvent("form_step_complete", { step })
  }

  // Auto-focus inputs when step changes
  useEffect(() => {
    if (step === 1) setTimeout(() => nameRef.current?.focus(), 350)
    if (step === 2) setTimeout(() => phoneRef.current?.focus(), 350)
  }, [step])

  // Loading step logic — step 5 triggers loading sequence
  useEffect(() => {
    if (step !== 5) return
    const texts = c.loadingTexts
    let idx = 0
    const interval = setInterval(() => {
      idx++
      if (idx < texts.length) {
        setLoadingIdx(idx)
      } else {
        clearInterval(interval)
        triggerWhatsApp()
      }
    }, 550)
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  const triggerWhatsApp = () => {
    const tierLabel = c.accessTiers.find((t) => t.key === accessTier)?.title ?? accessTier
    const levelLabel = c.levelCards[["A", "B", "C"].indexOf(level)]?.title ?? level
    const message =
      lang === "es"
        ? `Hola! Quiero inscribirme al taller "Landing Page en 3 Horas" 🚀\n\n📝 Nombre: ${name}\n📱 WhatsApp: ${phone}\n🎟️ Acceso: ${tierLabel}\n🧠 Nivel: ${levelLabel}\n\nPor favor confírmenme mi cupo. ¡Gracias!`
        : `Hi! I want to enroll in the "Landing Page in 3 Hours" workshop 🚀\n\n📝 Name: ${name}\n📱 WhatsApp: ${phone}\n🎟️ Access: ${tierLabel}\n🧠 Level: ${levelLabel}\n\nPlease confirm my spot. Thank you!`
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    setDone(true)
    trackEvent("whatsapp_redirect", { lang, accessTier, level: levelLabel })
  }

  const validateName = () => {
    if (name.trim().length < 2) {
      setNameError(true)
      setTimeout(() => setNameError(false), 600)
      return false
    }
    return true
  }

  const validatePhone = () => {
    const digits = phone.replace(/\D/g, "")
    if (digits.length < 10) {
      setPhoneError(true)
      setTimeout(() => setPhoneError(false), 600)
      return false
    }
    return true
  }

  const progressPct = Math.min(Math.max(step - 1, 0) / TOTAL_STEPS, 1)

  return (
    <div className="max-w-lg mx-auto">
      {/* Progress bar */}
      <div className="h-1 rounded-full overflow-hidden mb-0" style={{ backgroundColor: "#1E293B" }}>
        <motion.div
          className="h-full rounded-full bg-orange-500 origin-left"
          animate={{ scaleX: progressPct }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      {/* Form card */}
      <div
        className="rounded-b-2xl border border-t-0 border-slate-700 overflow-hidden"
        style={{ backgroundColor: "#0F172A", minHeight: 480 }}
      >
        <div className="flex items-center justify-center min-h-[480px] p-8">
          <AnimatePresence mode="wait" custom={direction}>
            {done ? (
              <motion.div
                key="success"
                initial={prefersReducedMotion ? { opacity: 0 } : { scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col items-center text-center gap-5 w-full"
              >
                <motion.div
                  initial={prefersReducedMotion ? {} : { scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                >
                  <CheckCircle size={72} className="text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-black text-white">{c.successTitle(name)}</h3>
                <p className="text-slate-400">{c.successBody}</p>
                <Button
                  className="mt-3 bg-green-600 hover:bg-green-700 text-white font-bold gap-2 min-h-[44px]"
                  onClick={triggerWhatsApp}
                >
                  <MessageCircle size={18} />
                  {c.successBtn}
                </Button>
              </motion.div>

            ) : step === 0 ? (
              <StepMotion key="step0" dir={direction} prefersReducedMotion={prefersReducedMotion}>
                <div className="flex flex-col items-center text-center gap-5 w-full">
                  <span className="text-6xl">🚀</span>
                  <h3 className="text-2xl font-black text-white">{c.step0Title}</h3>
                  <p className="text-slate-400">{c.step0Body}</p>
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-6 text-base rounded-xl min-h-[44px]"
                    onClick={advance}
                  >
                    {c.step0Btn}
                  </Button>
                </div>
              </StepMotion>

            ) : step === 1 ? (
              <StepMotion key="step1" dir={direction} prefersReducedMotion={prefersReducedMotion}>
                <div className="flex flex-col gap-5 w-full">
                  <h3 className="text-2xl font-bold text-white">{c.step1Label}</h3>
                  <motion.input
                    ref={nameRef}
                    id="form-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && validateName()) advance()
                    }}
                    placeholder={c.step1Placeholder}
                    animate={nameError && !prefersReducedMotion ? { x: [-8, 8, -8, 8, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    className="bg-transparent border-b-2 border-slate-600 focus:border-orange-500 outline-none text-white text-xl py-3 placeholder:text-slate-600 transition-colors w-full"
                  />
                  <p className="text-xs text-slate-600">{c.step1Hint}</p>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl min-h-[44px] mt-2"
                    onClick={() => validateName() && advance()}
                  >
                    {c.nextBtn}
                  </Button>
                </div>
              </StepMotion>

            ) : step === 2 ? (
              <StepMotion key="step2" dir={direction} prefersReducedMotion={prefersReducedMotion}>
                <div className="flex flex-col gap-5 w-full">
                  <h3 className="text-2xl font-bold text-white">{c.step2Label}</h3>
                  <p className="text-sm text-slate-500 -mt-3">{c.step2Sub}</p>
                  <motion.input
                    ref={phoneRef}
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && validatePhone()) advance()
                    }}
                    placeholder="+1 (201) 555-0000"
                    animate={phoneError && !prefersReducedMotion ? { x: [-8, 8, -8, 8, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    className="bg-transparent border-b-2 border-slate-600 focus:border-orange-500 outline-none text-white text-xl py-3 placeholder:text-slate-600 transition-colors w-full"
                  />
                  <p className="text-xs text-slate-600">{c.step1Hint}</p>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl min-h-[44px] mt-2"
                    onClick={() => validatePhone() && advance()}
                  >
                    {c.nextBtn}
                  </Button>
                </div>
              </StepMotion>

            ) : step === 3 ? (
              /* ── Step 3: Access tier selection ── */
              <StepMotion key="step3-access" dir={direction} prefersReducedMotion={prefersReducedMotion}>
                <div className="flex flex-col gap-4 w-full">
                  <h3 className="text-xl font-bold text-white">{c.step3AccessLabel}</h3>
                  <div className="flex flex-col gap-3">
                    {c.accessTiers.map((tier) => {
                      const selected = accessTier === tier.key
                      const isReferral = tier.key === "referral"
                      return (
                        <button
                          key={tier.key}
                          onClick={() => {
                            setAccessTier(tier.key)
                            setTimeout(() => {
                              setDirection(1)
                              setStep(4)
                              trackEvent("form_step_complete", { step: 3, accessTier: tier.key })
                            }, 220)
                          }}
                          className={`flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 min-h-[44px] w-full ${
                            selected
                              ? "border-orange-500 bg-orange-500/10"
                              : isReferral
                              ? "border-dashed border-orange-500/40 hover:border-orange-500/70 bg-orange-500/5"
                              : "border-slate-700 hover:border-orange-500/50 bg-slate-800/50"
                          }`}
                        >
                          <span className="text-2xl shrink-0">{tier.emoji}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <p className="font-bold text-white text-sm">{tier.title}</p>
                              {"badge" in tier && tier.badge && (
                                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/40 text-xs shrink-0">
                                  {tier.badge}
                                </Badge>
                              )}
                            </div>
                            <p className="text-slate-400 text-xs mt-0.5">{tier.body}</p>
                            <p className="text-green-400 text-xs font-semibold mt-1">{tier.savings}</p>
                          </div>
                          <div className="flex flex-col items-end shrink-0 gap-0.5">
                            <span className={`font-black text-base ${isReferral || selected ? "text-orange-400" : "text-white"}`}>
                              {tier.price}
                            </span>
                            <span className="text-slate-500 line-through text-xs">{tier.originalPrice}</span>
                          </div>
                          {selected && (
                            <CheckCircle size={16} className="text-orange-400 shrink-0 self-center ml-1" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </StepMotion>

            ) : step === 4 ? (
              /* ── Step 4: Level selection ── */
              <StepMotion key="step4-level" dir={direction} prefersReducedMotion={prefersReducedMotion}>
                <div className="flex flex-col gap-5 w-full">
                  <h3 className="text-xl font-bold text-white">{c.step4Label}</h3>
                  <div className="flex flex-col gap-3">
                    {c.levelCards.map((card, i) => {
                      const key = ["A", "B", "C"][i]
                      const selected = level === key
                      return (
                        <button
                          key={key}
                          onClick={() => {
                            setLevel(key)
                            setTimeout(() => {
                              setDirection(1)
                              setStep(5)
                              trackEvent("form_step_complete", { step: 4, level: key })
                            }, 220)
                          }}
                          className={`flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 min-h-[44px] ${
                            selected
                              ? "border-orange-500 bg-orange-500/10"
                              : "border-slate-700 hover:border-orange-500/50 bg-slate-800/50"
                          }`}
                        >
                          <span className="text-2xl shrink-0">{card.emoji}</span>
                          <div>
                            <p className="font-bold text-white text-sm">{card.title}</p>
                            <p className="text-slate-400 text-xs">{card.body}</p>
                          </div>
                          {selected && (
                            <CheckCircle size={18} className="text-orange-400 ml-auto shrink-0 mt-0.5" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </StepMotion>

            ) : (
              /* ── Step 5: Loading ── */
              <StepMotion key="step5-loading" dir={direction} prefersReducedMotion={prefersReducedMotion}>
                <div className="flex flex-col items-center text-center gap-6 w-full">
                  <Loader2 size={56} className="text-orange-500 animate-spin" />
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={loadingIdx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="text-white font-semibold text-lg"
                    >
                      {c.loadingTexts[loadingIdx]}
                    </motion.p>
                  </AnimatePresence>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-orange-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </StepMotion>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function StepMotion({
  children,
  dir,
  prefersReducedMotion,
}: {
  children: React.ReactNode
  dir: number
  prefersReducedMotion: boolean
}) {
  if (prefersReducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full"
      >
        {children}
      </motion.div>
    )
  }
  return (
    <motion.div
      custom={dir}
      variants={slideIn}
      initial="enter"
      animate="center"
      exit="exit"
      className="w-full"
    >
      {children}
    </motion.div>
  )
}
