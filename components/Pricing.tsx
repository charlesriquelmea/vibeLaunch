'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';

const plans = [
  {
    name: 'Acceso Básico',
    price: 'Gratis',
    description: 'Acceso al webinar en vivo',
    features: [
      'Acceso al webinar completo',
      'Preguntas en vivo',
      'Certificado básico',
    ],
    cta: 'Registrarse',
    highlighted: false,
  },
  {
    name: 'Acceso Premium',
    price: '$47',
    period: 'una vez',
    description: 'Incluye grabación + recursos',
    features: [
      'Todo del plan básico',
      'Grabación en HD',
      'Plantillas y recursos',
      'Acceso por 6 meses',
      'Guía de implementación',
      'Comunidad exclusiva',
    ],
    cta: 'Obtener Premium',
    highlighted: true,
  },
  {
    name: 'Plan VIP',
    price: '$197',
    period: 'una vez',
    description: 'Mentoría personal incluida',
    features: [
      'Todo del plan premium',
      '3 sesiones de mentoría 1-1',
      'Auditoría de tu negocio',
      'Plan personalizado',
      'Soporte por email prioritario',
      'Acceso de por vida',
    ],
    cta: 'Acceso VIP',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section className="w-full py-20 sm:py-32 px-4 bg-secondary">
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
              Elige Tu Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diferentes opciones para diferentes necesidades
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative rounded-2xl transition-all ${
                  plan.highlighted
                    ? 'md:scale-105 bg-card border-2 border-primary shadow-2xl'
                    : 'bg-card border border-border hover:border-primary'
                } p-8 flex flex-col`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Más Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground text-sm">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    plan.highlighted
                      ? 'bg-primary text-primary-foreground hover:opacity-90'
                      : 'bg-secondary text-foreground border border-border hover:border-primary'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Money Back Guarantee */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm">
              💰 <span className="font-bold text-foreground">Garantía de 30 días</span> - Si no estás satisfecho, te devolvemos tu dinero
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
