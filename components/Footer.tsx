'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-foreground text-primary-foreground py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-foreground">
                  V
                </div>
                <span className="font-bold text-lg">VibeLaunch</span>
              </div>
              <p className="text-sm opacity-75">
                Transformando emprendedores latinos a través del conocimiento digital.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm opacity-75 hover:opacity-100 transition-opacity">
                <li><a href="#detalles" className="hover:text-white">Detalles</a></li>
                <li><a href="#speakers" className="hover:text-white">Speakers</a></li>
                <li><a href="#faq" className="hover:text-white">Preguntas</a></li>
                <li><a href="#form" className="hover:text-white">Registrarse</a></li>
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-75 hover:opacity-100 transition-opacity">
                <li><a href="#" className="hover:text-white">Privacidad</a></li>
                <li><a href="#" className="hover:text-white">Términos</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
                <li><a href="#" className="hover:text-white">Soporte</a></li>
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Síguenos</h4>
              <div className="flex gap-3">
                {[
                  { name: 'Facebook', icon: 'f' },
                  { name: 'Instagram', icon: 'i' },
                  { name: 'LinkedIn', icon: 'in' },
                  { name: 'Twitter', icon: 'x' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-sm font-bold hover:bg-primary hover:text-foreground transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="border-t border-primary/20 pt-8">
            <div className="text-center text-sm opacity-75">
              <p>© {currentYear} VibeLaunch. Todos los derechos reservados.</p>
              <p className="mt-2">Hecho con ❤️ para emprendedores latinos</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
