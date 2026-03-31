'use client';

import { motion } from 'framer-motion';
import { fadeInVariants } from '@/lib/animations';

export function AnnouncementBar() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className="w-full bg-primary text-primary-foreground py-3 px-4 text-center"
    >
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <span className="text-sm font-medium">
          🎉 Webinar en vivo el 15 de Mayo
        </span>
        <a
          href="#form"
          className="text-sm font-semibold underline hover:opacity-80 transition-opacity"
        >
          Regístrate ahora
        </a>
      </div>
    </motion.div>
  );
}
