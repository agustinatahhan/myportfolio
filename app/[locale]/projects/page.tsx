"use client";
import { useTranslations } from "next-intl";
import { projects } from "@/app/data/projects";
import ProjectCard from "@/app/components/projectCard/ProjectCard";

export default function Projects() {
  const t = useTranslations();

  return (
    <section id="work" className="relative bg-background py-16 min-h-[85vh]">
      {/* <SectionWave position="top" color="#f3efff" height={120} /> */}

      <div className="relative mx-auto max-w-6xl px-6 -mt-6" >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          {t("Projects.title")}
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p, i) => {
            const firstImg = p.media.find((m) => m.type === "image");
            const imageSrc = firstImg?.src ?? "/logoPort.png";
            const imageAlt = firstImg?.alt ?? "Project Image";

            return (
              <div key={p.id}>
                <ProjectCard
                  href={`/projects/${p.id}`}
                  title={t(p.titleKey)}
                  imageSrc={imageSrc}
                  imageAlt={imageAlt}
                  priority={i === 0}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
