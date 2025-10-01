"use client";
import { useTranslations } from "next-intl";
import { projects } from "@/app/data/projects";
import ProjectCard from "@/app/components/projectCard/ProjectCard";
import { motion } from "motion/react";

export default function Projects() {
  const t = useTranslations();

  return (
    <section id="work" className="relative bg-skills py-16 min-h-[85vh]">
      <div className="relative mx-auto max-w-6xl px-6 mt-3">
        <motion.h2
          className="text-5xl sm:text-7xl font-bold text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
          }}
        >
          {t("Projects.title")}
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p, i) => {
            const firstImg = p.media.find((m) => m.type === "image");
            const imageSrc = firstImg?.src ?? "/logoPort.png";
            const imageAlt = firstImg?.alt ?? "Project Image";

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                }}
                key={p.id}
              >
                <ProjectCard
                  href={`/projects/${p.id}`}
                  title={t(p.titleKey)}
                  imageSrc={imageSrc}
                  imageAlt={imageAlt}
                  priority={i === 0}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
