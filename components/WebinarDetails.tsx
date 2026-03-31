'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';

const details = [
  {
    icon: '📅',
    title: 'Fecha del Evento',
    description: '15 de Mayo, 2024\n7:00 PM - 10:00 PM (Hora Est)',
  },
  {
    icon: '⏱️',
    title: 'Duración',
    description: '3 horas de contenido\ncontenido práctico y directo',
  },
  {
    icon: '🎯',
    title: 'Formato',
    description: 'En vivo por Zoom\ncon Q&A interactivo',
  },
  {
    icon: '📊',
    title: 'Beneficios',
    description: 'Certificado de asistencia\nAcceso a recursos premium',
  },
];

const agenda = [
  {
    time: '7:00 - 7:30 PM',
    title: 'Introducción y Bienvenida',
    description: 'Conexión con la comunidad y objetivos del webinar',
  },
  {
    time: '7:30 - 8:30 PM',
    title: 'Estrategias de Crecimiento Digital',
    description: 'Los 5 pilares principales para escalar tu negocio online',
  },
  {
    time: '8:30 - 9:15 PM',
    title: 'Casos de Éxito',
    description: 'Historias reales de emprendedores que cambiaron sus resultados',
  },
  {
    time: '9:15 - 10:00 PM',
    title: 'Sesión de Preguntas & Plan de Acción',
    description: 'Responde tus dudas y recibe tu plan personalizado',
  },
];

export function WebinarDetails() {
  return (
    <section
      id="detalles"
      className="w-full py-20 sm:py-32 px-4 bg-secondary"
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
              Todo Lo Que Necesitas Saber
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detalles completos sobre el webinar, agenda y beneficios exclusivos
            </p>
          </motion.div>

          {/* Quick Details Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20"
          >
            {details.map((detail, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{detail.icon}</div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {detail.title}
                </h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {detail.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Agenda */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
              Agenda del Webinar
            </h3>
            <div className="space-y-4">
              {agenda.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-6 sm:p-8 border border-border hover:border-primary transition-colors group cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block px-4 py-2 bg-primary bg-opacity-10 text-primary font-bold text-sm rounded-lg group-hover:bg-opacity-20 transition-colors">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Takeaways */}
          <motion.div variants={itemVariants} className="bg-primary bg-opacity-5 rounded-2xl p-8 sm:p-12 border border-primary border-opacity-20">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Lo que aprenderás:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Cómo crear una estrategia digital desde cero',
                'Las 5 fuentes de tráfico más rentables',
                'Cómo convertir visitantes en clientes',
                'Sistemas de automatización que funcionan',
                'Cómo escalar sin aumentar costos',
                'Métodos de análisis y optimización',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
