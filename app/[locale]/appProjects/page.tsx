"use client";

import { useTranslations } from "next-intl";
import { projectApps } from "@/app/data/projectApps";
import { motion } from "motion/react";

export default function ProjectAppSection() {
  const t = useTranslations();

  return (
    <section id="apps" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          {projectApps.map((app, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-10 items-center ">
                  {/* VIDEO */}
                  <div
                    className={`flex ${isReverse ? "justify-center  items-center md:order-2" : "justify-center items-center md:order-1"}`}
                  >
                    <div className="relative aspect-[9/16] w-full max-w-[260px] bg-black rounded-[2.5rem] p-3 shadow-2xl">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20" />
                      <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black">
                        <video
                          src={app.videoUrl}
                          controls
                          playsInline
                          className="w-full h-full object-fill"
                        />
                      </div>
                    </div>
                  </div>

                  {/* TEXTO */}
                  <div
                    className={`space-y-3 text-start md:text-left ${isReverse ? "md:order-1" : "md:order-2"}`}
                  >
                    <h3 className="text-lg md:text-xl font-extrabold tracking-tight uppercase sat text-title">
                      {t(app.titleKey)}
                    </h3>
                    <p className="text-title leading-relaxed text-justify [text-align-last:left] md:hyphens-auto md:break-words">
                      {t(app.descKey)}
                    </p>
                    <div className="flex flex-wrap justify-start gap-3 pt-4">
                      {app.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full border border-title"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
