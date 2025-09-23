"use client";
import SectionWave from "@/app/components/divider/SectionWave";
import { useTranslations } from "next-intl";
import { projects } from "@/app/data/projects";
import ProjectCard from "@/app/components/projectCard/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const t = useTranslations();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15, 
      },
    }),
  };

  return (
    <section
      id="work"
      className="relative bg-background py-16 min-h-[85vh]"
    >
      <SectionWave position="top" color="#f3efff" height={120} />

      <div className="relative mx-auto max-w-6xl px-6 -mt-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          {t("Projects.title")}
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p, i) => {
            const firstImg = p.media.find((m) => m.type === "image");
            const imageSrc = firstImg?.src ?? "/logoPort.png";
            const imageAlt = firstImg?.alt ?? "Project Image";

            return (
              <motion.div
                key={p.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
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
