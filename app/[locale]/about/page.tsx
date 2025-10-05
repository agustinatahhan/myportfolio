// app/[locale]/_components/About.tsx
"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className="relative bg-about min-h-[85vh] flex items-center overflow-hidden scroll-mt-[72px] "
    >
      <div className="relative mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <motion.div   initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{
                duration: 0.3,
              }} className="relative sm:w-[300px] sm:h-[300px] w-[180px] h-[180px] rounded-full overflow-hidden">
            <div
              className={`absolute -inset-1 rounded-full
                         bg-[conic-gradient(from_0deg,_#FF8FA3_0%,_#9B6BFF_40%,_#D0E2B3_70%,_#FF8FA3_100%)]
                         opacity-60 blur-[4px]
                         motion-safe:animate-[spin_20s_linear_infinite] motion-reduce:animate-none
                         will-change-transform transform-gpu pointer-events-none`}
              aria-hidden
            />
            <div className="absolute inset-0.5 rounded-full bg-background" />
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <Image
                src="/logoPort.png"
                alt="Agustina"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 180px, 300px"
              />
            </div>
          </motion.div>
        </div>

        <div className="text-center md:text-left space-y-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{
                duration: 0.3,
              }}
              className="relative inline-block text-5xl sm:text-7xl font-bold"
            >
              {t("about")}
              <span
                className={`absolute left-0 -bottom-2 h-2 w-full bg-gradient-to-r from-[#FF8FA3] to-[#9B6BFF] rounded-full origin-left scale-x-0 motion-safe:animate-[grow_900ms_ease-out_forwards] motion-reduce:animate-none [animation-delay:200ms]`}
              />
            </motion.h2>
          </div>

         <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  className="text-lg leading-relaxed whitespace-pre-line"
>
  {t("iam")}
</motion.p>

        
        </div>
      </div>

      <style jsx>{`
        @keyframes grow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
