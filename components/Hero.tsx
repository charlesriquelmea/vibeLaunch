'use client';

import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { containerVariants, itemVariants } from '@/lib/animations';

export function Hero() {
  const typewriterText = useTypewriter(
    ['Crecimiento Digital', 'Más Ventas', 'Éxito Empresarial'],
    50,
    2000,
    true
  );

  return (
    <section className="w-full bg-gradient-to-b from-background via-background to-secondary py-20 sm:py-32 lg:py-40 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wide"
              >
                Webinar Exclusivo para Emprendedores
              </motion.p>
              
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                Aprende Las Estrategias de{' '}
                <span className="text-primary relative inline-block min-h-[1.2em]">
                  {typewriterText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                Descubre cómo los mejores emprendedores latinos han transformado sus negocios. 3 horas de contenido práctico, estrategias probadas y acceso directo a expertos.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#form"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-center hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                Registrarse Gratis
              </a>
              <a
                href="#detalles"
                className="px-8 py-3 bg-secondary text-foreground rounded-full font-semibold text-center border border-border hover:bg-muted transition-colors"
              >
                Ver Detalles
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary border-2 border-background flex items-center justify-center text-primary-foreground text-xs font-bold"
                    >
                      {i}K
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">+3,000 asistentes</p>
                <p>en webinars anteriores</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - SVG Hero Illustration */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center justify-center"
          >
            <svg
              viewBox="0 0 400 500"
              className="w-full max-w-lg"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circle */}
              <circle cx="200" cy="250" r="180" fill="#ff6b35" opacity="0.1" />
              
              {/* Laptop screen */}
              <rect x="80" y="120" width="240" height="160" rx="8" fill="#ffffff" stroke="#ff6b35" strokeWidth="3" />
              
              {/* Screen content - bars representing chart */}
              <rect x="110" y="170" width="20" height="90" fill="#ff6b35" />
              <rect x="150" y="145" width="20" height="115" fill="#ffa500" />
              <rect x="190" y="160" width="20" height="100" fill="#f59e0b" />
              <rect x="230" y="120" width="20" height="140" fill="#10b981" />
              
              {/* Laptop base */}
              <rect x="120" y="280" width="160" height="12" rx="2" fill="#ff6b35" />
              <line x1="100" y1="292" x2="300" y2="292" stroke="#ff6b35" strokeWidth="3" />
              
              {/* Decorative elements */}
              <circle cx="100" cy="100" r="15" fill="#ff6b35" opacity="0.2" />
              <circle cx="320" cy="350" r="20" fill="#ffa500" opacity="0.2" />
              <circle cx="80" cy="400" r="12" fill="#f59e0b" opacity="0.2" />
              
              {/* Upward arrow indicator */}
              <path
                d="M 350 350 L 370 320 M 370 320 L 380 330"
                stroke="#10b981"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text x="350" y="310" fontSize="16" fontWeight="bold" fill="#10b981">+45%</text>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
