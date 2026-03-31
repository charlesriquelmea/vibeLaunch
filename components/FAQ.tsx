'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';

const faqs = [
  {
    question: '¿Es realmente gratis el webinar?',
    answer: 'Sí, el acceso al webinar en vivo es completamente gratis para todos. Solo necesitas registrarte con tu correo y número de WhatsApp. Hay opciones premium posteriores si deseas acceder a grabaciones y recursos adicionales.',
  },
  {
    question: '¿Necesito experiencia previa en marketing digital?',
    answer: 'No, este webinar está diseñado para principiantes y emprendedores con cualquier nivel de experiencia. Cubriremos desde conceptos básicos hasta estrategias avanzadas que cualquiera puede implementar.',
  },
  {
    question: '¿Qué sucede si me pierdo el webinar en vivo?',
    answer: 'Si te registras en el plan Premium, tendrás acceso a la grabación en HD durante 6 meses. También recibirás las notas de clase y recursos downloadables.',
  },
  {
    question: '¿Hay límite de asistentes?',
    answer: 'No hay límite para el webinar en vivo. Todos los registrados recibirán acceso al evento y podrán hacer preguntas durante la sesión de Q&A.',
  },
  {
    question: '¿Qué idioma se utilizará?',
    answer: 'El webinar será completamente en español. Todos los materiales, grabaciones y recursos también estarán en español.',
  },
  {
    question: '¿Puedo traer a mi equipo?',
    answer: 'Claro. Puedes compartir el link de registro con tu equipo. Si registras a más de 5 personas, contáctanos para opciones de grupo especiales.',
  },
];

const testimonials = [
  {
    name: 'José García',
    role: 'Emprendedor Digital',
    content: 'Este webinar cambió completamente mi perspectiva sobre crecimiento digital. Implementé las estrategias al día siguiente y ya veo resultados.',
    stars: 5,
  },
  {
    name: 'María López',
    role: 'Dueña de E-commerce',
    content: 'Excelente contenido. Los speakers conocen de qué hablan. Las plantillas y recursos son oro puro. Vale cada centavo del plan premium.',
    stars: 5,
  },
  {
    name: 'Carlos Ruiz',
    role: 'Consultor',
    content: 'El mejor webinar en el que he participado. La comunidad de networking que se formó es invaluable. Recomendado 100%',
    stars: 5,
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="w-full py-20 sm:py-32 px-4 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Respuestas a las dudas más comunes
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div variants={containerVariants} className="space-y-4 mb-20">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors"
                >
                  <span className="font-semibold text-foreground text-left">
                    {faq.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-primary flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border bg-secondary/50"
                    >
                      <p className="px-6 py-4 text-muted-foreground">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              Lo que dicen nuestros asistentes
            </h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-secondary rounded-lg p-6 border border-border hover:border-primary transition-colors"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <span key={i} className="text-primary text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Still Have Questions */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-primary/10 rounded-xl p-8 border border-primary/20"
          >
            <h3 className="font-bold text-lg text-foreground mb-2">
              ¿Aún tienes preguntas?
            </h3>
            <p className="text-muted-foreground mb-4">
              Nuestro equipo está disponible para ayudarte
            </p>
            <a
              href="https://wa.me/1234567890?text=Hola, tengo una pregunta sobre el webinar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contactar por WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
