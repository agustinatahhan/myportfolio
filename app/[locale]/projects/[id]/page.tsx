import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { projects } from "@/app/data/projects";
import { FaGithub } from "react-icons/fa";
import { BiLink } from "react-icons/bi";
import { TechStack } from "@/app/components/stack/TechStack";

type RouteParams = { locale: string; id: string };
type Props = { params: Promise<RouteParams> };

const locales = ["en", "es"];
export async function generateStaticParams() {
  return projects.flatMap((p) => locales.map((locale) => ({ locale, id: p.id })));
}

export async function generateMetadata({ params }: Props) {
  const { id, locale } = await params;
  const t = await getTranslations({ locale });
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: t(project.titleKey),
    description: t(project.descKey),
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id, locale } = await params;
  const t = await getTranslations({ locale });
  const project = projects.find((p) => p.id === id);
  if (!project) return notFound();

  return (
    <section className="bg-background min-h-[96vh] w-full flex justify-center items-center">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex-col text-center md:text-left space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-title leading-tight">
              {t(project.titleKey)}
            </h1>
            
            {(project.repo || project.live) && (
              <div className="flex gap-3 shrink-0">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#2d2a24] text-white text-sm font-medium rounded-lg hover:bg-[#2d2a24]/90 transition-colors"
                  >
                    <FaGithub size={16} />
                    Repo
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#cb82d4]/80 text-white text-sm font-medium rounded-lg hover:bg-[#cb82d4]/60 transition-colors"
                  >
                    <BiLink size={16} />
                    Live
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="max-w-3xl mx-auto md:mx-0">
            <p className="text-lg sm:text-xl text-[--color-description] leading-relaxed">
              {t(project.descKey)}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[--color-title]">
              {t("Projects.tech")}
            </h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-3 sm:gap-4">
              {project.tech.map((tech, index) => (
                <TechStack key={tech} index={index} tech={tech} />
              ))}
            </div>
          </div>

          {project.media?.filter((m) => m.type === "image").length > 0 && (
            <div className="space-y-6 sm:space-y-8">
              {project.media
                .filter((m) => m.type === "image")
                .map((m, i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-sm"
                  >
                    <Image
                      src={m.src}
                      alt={m.alt}
                      fill
                      className="object-cover"
                      priority={i === 0}
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}