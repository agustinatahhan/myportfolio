"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage")
  return (
    <section className="relative flex flex-col items-center justify-center h-[87dvh] bg-background overflow-hidden">
      {/* <div className="absolute top-20 left-20 w-72 h-72 bg-[#FF8FA3]/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#9B6BFF]/30 rounded-full blur-3xl animate-pulse" /> */}

      <motion.h1
        className="text-5xl sm:text-7xl font-bold text-title relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("title")}
      </motion.h1>

      <motion.h2
        className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#FF8FA3] to-[#9B6BFF] bg-clip-text text-transparent mt-2 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {t("rol")}
      </motion.h2>

      <motion.h3
        className="mt-4 sm:text-2xl text-[--color-description] relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {t("description")}
      </motion.h3>
     
    </section>
  );
}
