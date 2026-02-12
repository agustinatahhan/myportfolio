"use client";
import { SkillsTicker } from "@/app/components/carrousel/Skills";
// import { TechStack } from "@/app/components/stack/TechStack";
// import { motion } from "motion/react";
// import { useTranslations } from "next-intl";
// import {
//   SiReact,
//   SiNextdotjs,
//   SiNodedotjs,
//   SiExpress,
//   SiPostgresql,
//   SiSequelize,
//   SiJavascript,
//   SiTypescript,
//   SiHtml5,
//   SiCss3,
//   SiVercel,
//   SiGit,
//   SiTailwindcss,
//   SiBootstrap,
// } from "react-icons/si";
// import { IoLogoFirebase } from "react-icons/io5";

// import { MdEmail } from "react-icons/md";

export default function Skills() {
  // const t = useTranslations("Skills");

  // const frontendSkills = [
  //   { name: "React.js", icon: SiReact },
  //   { name: "Next.js", icon: SiNextdotjs },
  //   { name: "React Native", icon: SiReact },
  //   { name: "JavaScript", icon: SiJavascript },
  //   { name: "TypeScript", icon: SiTypescript },
  //   { name: "HTML", icon: SiHtml5 },
  //   { name: "CSS", icon: SiCss3 },
  //   { name: "Tailwind CSS", icon: SiTailwindcss },
  //   { name: "Bootstrap", icon: SiBootstrap },
  // ];

  // const backendSkills = [
  //   { name: "Node.js", icon: SiNodedotjs },
  //   { name: "Express.js", icon: SiExpress },
  //   { name: "PostgreSQL", icon: SiPostgresql },
  //   { name: "Sequelize", icon: SiSequelize },
  //   { name: "Firebase", icon: IoLogoFirebase },
  // ];

  // const toolsSkills = [
  //   { name: "Git", icon: SiGit },
  //   { name: "Vercel", icon: SiVercel },
  //   { name: "Email.js", icon: MdEmail },
  // ];

  return (
    <section
      id="skills"
      className="relative bg-mochita flex items-center overflow-hidden scroll-mt-[72px]"
    >
      <SkillsTicker />
    </section>
  );
}
