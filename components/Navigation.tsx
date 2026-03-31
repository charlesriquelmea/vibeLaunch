'use client';

import { motion } from 'framer-motion';
import { fadeInVariants } from '@/lib/animations';

export function Navigation() {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className="w-full bg-card border-b border-border sticky top-0 z-40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">V</span>
          </div>
          <span className="font-bold text-lg text-foreground">VibeLaunch</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#detalles"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Detalles
          </a>
          <a
            href="#speakers"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Speakers
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Preguntas
          </a>
          <a
            href="#form"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Registrarse
          </a>
        </div>

        <div className="md:hidden">
          <a
            href="#form"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold"
          >
            Registrarse
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
