'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';

const speakers = [
  {
    name: 'Carlos Mendez',
    title: 'Experto en Growth Marketing',
    bio: 'Experto con 10+ años construyendo negocios digitales de 7 figuras',
    expertise: ['SEO', 'Ads', 'Email Marketing'],
  },
  {
    name: 'María García',
    title: 'Especialista en Conversión',
    bio: 'Ha ayudado a 500+ emprendedores a triplicar sus conversiones',
    expertise: ['UX/UI', 'Copywriting', 'Funnels'],
  },
  {
    name: 'Juan Rodríguez',
    title: 'Community Builder',
    bio: 'Construyó una comunidad de 50K+ emprendedores latinos activos',
    expertise: ['Community', 'Engagement', 'Growth'],
  },
];

export function Speakers() {
  return (
    <section
      id="speakers"
      className="w-full py-20 sm:py-32 px-4 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Conoce a Nuestros Expertos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los mejores en la industria compartiendo sus secretos contigo
            </p>
          </motion.div>

          {/* Speakers Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-secondary rounded-2xl p-8 border border-border hover:border-primary transition-all h-full hover:shadow-lg">
                  {/* Avatar placeholder */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                    {speaker.name.charAt(0)}
                  </div>

                  <h3 className="text-xl font-bold text-foreground text-center mb-2">
                    {speaker.name}
                  </h3>
                  
                  <p className="text-primary font-semibold text-center text-sm mb-4">
                    {speaker.title}
                  </p>

                  <p className="text-muted-foreground text-center mb-6 min-h-[3rem]">
                    {speaker.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {speaker.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary bg-opacity-10 text-primary text-xs font-semibold rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 justify-center mt-6 pt-6 border-t border-border">
                    {['LinkedIn', 'Twitter', 'Instagram'].map((social, idx) => (
                      <button
                        key={idx}
                        className="p-2 hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors text-muted-foreground hover:text-inherit"
                      >
                        <span className="text-sm font-semibold">{social[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: '50+', label: 'Años de Experiencia' },
              { number: '100K+', label: 'Estudiantes Exitosos' },
              { number: '4.9★', label: 'Calificación' },
              { number: '24/7', label: 'Soporte' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
