"use client";

import { useTranslations } from "next-intl";
import { projects } from "@/app/data/projects";
import ProjectCard from "@/app/components/projectCard/ProjectCard";
import { motion } from "motion/react";

export default function Projects() {
  const t = useTranslations();

  return (
    <section id="work" className="relative bg-[#F5F3EF] py-15 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 md:mb-15">
          <motion.h2
            className="text-4xl sm:text-5xl font-black tracking-tight uppercase sat text-center md:text-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {t("Projects.title")}
          </motion.h2>
          <p className="text-xs uppercase tracking-[0.3em] text-mocha/60 mt-4 text-center md:text-start">
            Web & App
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-20">
          {projects.map((p, i) => {
            const firstImg = p.media.find((m) => m.type === "image");
            const imageSrc = firstImg?.src ?? "/logoPort.png";
            const imageAlt = firstImg?.alt ?? "Project Image";
            return (
              <ProjectCard
                key={p.id}
                href={`projects/${p.id}`}
                title={t(p.titleKey)}
                tech={p.tech}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                priority={i === 0}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
