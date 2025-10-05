"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <section className="relative flex flex-col items-center justify-center h-[80dvh] sm:h-[87dvh] bg-background overflow-hidden">
      <div
        className="
          absolute 
          top-10 left-10 
          w-40 h-40 
          sm:top-20 sm:left-20 sm:w-72 sm:h-72 
          bg-[#FF8FA3]/30 rounded-full blur-3xl animate-pulse
        "
      />
      <div
        className="
          absolute 
          bottom-10 right-5 
          w-48 h-48 
          sm:bottom-20 sm:right-20 sm:w-96 sm:h-96 
          bg-[#9B6BFF]/30 rounded-full blur-3xl animate-pulse
        "
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-4xl sm:text-7xl font-bold text-title text-center z-10"
      >
        {t("title")}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-3xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#FF8FA3] to-[#9B6BFF] bg-clip-text text-transparent mt-2 text-center z-10"
      >
        {t("rol")}
      </motion.h2>
    </section>
  );
}
