"use client";

import { motion } from "motion/react";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

export function SkillsTicker() {
  const skills = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
        { name: "React Native", icon: SiReact },

    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
      { name: "Firebase", icon: IoLogoFirebase },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Git", icon: SiGit },
  ];

  return (
    <section className="py-3 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-3 text-mocha cursor-none"
              >
                <Icon size={20} />
                <span className="text-sm tracking-wide">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
