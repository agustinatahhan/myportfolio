"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="relative bg-mochita min-h-[85vh] flex items-center overflow-hidden scroll-mt-[72px]"
    >
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 py-16 sm:py-20 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end order-2 md:order-1"
        >
          <div className="relative">
            <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[340px] md:h-[450px]">
              <div className="absolute inset-0 rounded-t-full rounded-b-none bg-gradient-to-br from-[#8B7355] via-mocha/60 to-[#6F5645] p-[3px]">
                <div className="absolute inset-0 rounded-t-full rounded-b-none bg-mochita p-[8px]">
                  <div className="relative w-full h-full rounded-t-full rounded-b-none overflow-hidden">
                    <Image
                      src="/me.jpg"
                      alt="Profile"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 280px, 340px"
                    />
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -right-4 w-8 h-8 text-mocha/60"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-8 -left-6 w-6 h-6 text-mocha/60"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-2 left-8 w-5 h-5 text-mocha/60"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-center md:text-left space-y-6 order-1 md:order-2"
        >
          {/* Título editorial con serif */}
          <div className="">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl sat italic font-light text-mocha leading-tight"
            >
              {t("headline")}
            </motion.h2>

            {/* Línea decorativa sutil */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[2px] w-16 bg-mocha origin-left mx-auto md:mx-0 hidden md:flex"
            />
          </div>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg leading-relaxed text-title whitespace-pre-line max-w-md mx-auto md:mx-0"
          >
            {t("description")}
          </motion.p>

          {/* Botón CTA estilo editorial */}
         <motion.a
  href="mailto:tucorreo@email.com"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="mt-8 inline-block px-8 py-3 text-vainilla uppercase tracking-[0.2em] text-xs font-medium rounded-full bg-mocha hover:bg-mocha/60"
>
  {t("cta")}
</motion.a>

        </motion.div>
      </div>

      {/* Tipografía serif para headlines */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&display=swap");
      `}</style>
    </section>
  );
}
