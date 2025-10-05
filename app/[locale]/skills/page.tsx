"use client";
import { TechStack } from "@/app/components/stack/TechStack";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiGit,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import { MdEmail } from "react-icons/md";

export default function Skills() {
  const t = useTranslations("Skills");

  const frontendSkills = [
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React Native", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
  ];

  const backendSkills = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Sequelize", icon: SiSequelize },
    { name: "Firebase", icon: IoLogoFirebase },
  ];

  const toolsSkills = [
    { name: "Git", icon: SiGit },
    { name: "Vercel", icon: SiVercel },
    { name: "Email.js", icon: MdEmail },
  ];

  return (
    <section
      id="skills"
      className="relative bg-background min-h-[85vh] flex items-center overflow-hidden scroll-mt-[72px]"
    >
      <div className="relative mx-auto max-w-5xl px-6 py-20 gap-12 items-center">
        <div className="flex flex-col items-center justify-center ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative inline-block text-5xl sm:text-7xl font-bold text-title mb-8"
          >
            {t("skills")}
          </motion.h2>

          <div className="space-y-8 max-w-4xl">
            <div className="flex flex-col items-center justify-center sm:items-start sm-justify-start">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-semibold mb-3 text-title "
              >
                Frontend
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap sm:justify-start justify-center gap-3 sm:gap-4"
              >
                {frontendSkills.map((tech, index) => (
                  <TechStack
                    key={tech.name}
                    index={index}
                    tech={tech.name}
                    icon={<tech.icon size={20} />}
                  />
                ))}
              </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center sm:items-start sm-justify-start">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-semibold mb-3 text-title"
              >
                Backend
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap sm:justify-start justify-center gap-3 sm:gap-4"
              >
                {backendSkills.map((tech, index) => (
                  <TechStack
                    key={tech.name}
                    index={index}
                    tech={tech.name}
                    icon={<tech.icon size={20} />}
                  />
                ))}
              </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center sm:items-start sm-justify-start">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-semibold mb-3 text-title"
              >
                Tools
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap sm:justify-start justify-center gap-3 sm:gap-4"
              >
                {toolsSkills.map((tech, index) => (
                  <TechStack
                    key={tech.name}
                    index={index}
                    tech={tech.name}
                    icon={<tech.icon size={20} />}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
