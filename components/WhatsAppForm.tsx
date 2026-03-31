'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';
import { triggerConfetti } from '@/lib/confetti';
import { containerVariants, itemVariants } from '@/lib/animations';

type FormStep = 1 | 2 | 3 | 4 | 5 | 6;

export function WhatsAppForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    challenge: '',
  });

  const countdown = useCountdown('2026-04-25T10:00:00-04:00');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => (prev + 1) as FormStep);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as FormStep);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      triggerConfetti();
    }, 1500);
  };

  const whatsappMessage = `Hola, me gustaría registrarme al webinar. Mi nombre es ${formData.name}, mi negocio es ${formData.business} y estoy interesado en aprender sobre crecimiento digital.`;
  const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;

  if (isSubmitted) {
    return (
      <section id="form" className="w-full py-20 sm:py-32 px-4 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
              ¡Registro Completado!
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-xl mx-auto">
              Te hemos enviado un mensaje por WhatsApp con los detalles del webinar y acceso a la comunidad exclusiva.
            </p>
            <div className="pt-6 space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-primary rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                Abrir WhatsApp
              </a>
              <p className="text-sm text-primary-foreground/75">
                Si no recibiste el mensaje, verifica tu carpeta de spam
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="w-full py-20 sm:py-32 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Asegura Tu Lugar
            </h2>
            <p className="text-lg text-muted-foreground">
              Completa el registro en 6 pasos simples
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div variants={itemVariants} className="mb-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
            <p className="text-center text-sm text-muted-foreground mb-3">
              El webinar comienza en:
            </p>
            <div className="flex justify-center gap-4 sm:gap-6">
              {[
                { label: 'Días', value: countdown.days },
                { label: 'Horas', value: countdown.hours },
                { label: 'Minutos', value: countdown.minutes },
                { label: 'Segundos', value: countdown.seconds },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="bg-white text-primary rounded-lg px-3 sm:px-4 py-2 mb-2 font-bold text-xl sm:text-2xl min-w-[50px]">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-lg"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-semibold text-muted-foreground">
                  Paso {currentStep} de 6
                </p>
                <p className="text-sm font-semibold text-primary">
                  {Math.round((currentStep / 6) * 100)}%
                </p>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  className="bg-primary h-full rounded-full"
                  initial={{ width: '16.67%' }}
                  animate={{ width: `${(currentStep / 6) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Form Steps */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 mb-8"
            >
              {currentStep === 1 && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    ¿Cuál es tu nombre?
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Número de teléfono (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (123) 456-7890"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Tu correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              )}

              {currentStep === 4 && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    ¿Cuál es tu tipo de negocio?
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    placeholder="Ej: E-commerce, Consultoría, Servicios, etc."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              )}

              {currentStep === 5 && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    ¿Cuál es tu principal desafío?
                  </label>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos cuál es el principal reto que enfrenta tu negocio..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>
              )}

              {currentStep === 6 && (
                <div className="text-center space-y-4">
                  <p className="text-foreground font-semibold">
                    Resumen de tu registro:
                  </p>
                  <div className="bg-secondary rounded-lg p-6 text-left space-y-3">
                    <p><span className="font-semibold text-muted-foreground">Nombre:</span> {formData.name}</p>
                    <p><span className="font-semibold text-muted-foreground">Teléfono:</span> {formData.phone}</p>
                    <p><span className="font-semibold text-muted-foreground">Email:</span> {formData.email}</p>
                    <p><span className="font-semibold text-muted-foreground">Negocio:</span> {formData.business}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ¿Está todo correcto? Confirma para completar tu registro
                  </p>
                </div>
              )}
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              {currentStep > 1 && (
                <button
                  onClick={handlePrevStep}
                  className="flex-1 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                >
                  Atrás
                </button>
              )}
              
              {currentStep < 6 ? (
                <button
                  onClick={handleNextStep}
                  disabled={
                    (currentStep === 1 && !formData.name) ||
                    (currentStep === 2 && !formData.phone) ||
                    (currentStep === 3 && !formData.email) ||
                    (currentStep === 4 && !formData.business) ||
                    (currentStep === 5 && !formData.challenge)
                  }
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Registrando...
                    </>
                  ) : (
                    'Completar Registro'
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
