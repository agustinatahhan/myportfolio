"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const letters = (t("rol") as string).split("");

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-mocha text-vainilla overflow-hidden px-6">
      <div className="flex flex-col items-center max-w-5xl w-full z-10">
        {/* <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm sm:text-lg uppercase tracking-[0.2em] mb-4 font-medium opacity-90"
        >
          {t("rol")}
        </motion.p> */}
        <div className=" h-12 sm:h-16 flex items-center justify-center overflow-visible">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex text-[0.65rem] sm:text-sm uppercase tracking-[0.35em] font-light"
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: [0, -12, 0, 8, 0, -6, 0],
                  opacity: 1,
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.08,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: [0.45, 0, 0.55, 1],
                }}
                className="inline-block"
                style={{
                  textShadow: "0 0 20px rgba(245, 245, 220, 0.3)",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center leading-[0.85] text-center"
        >
          <h1 className="text-7xl md:text-[8rem] lg:text-[12rem] font-bold uppercase tracking-tighter sat">
            {t("name")}
          </h1>
          <h1 className="text-7xl md:text-[8rem] lg:text-[12rem] font-bold uppercase tracking-tighter sat">
            {t("lastname")}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
