"use client";

import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  href: string;
  title: string;
  tech: string[];
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
};

export default function ProjectCard({
  href,
  title,
  tech,
  imageSrc,
  imageAlt,
  priority = false,
}: ProjectCardProps) {
  const mainTech = tech.slice(0, 3);

  return (
    <Link href={href} className="group block">
      <div className="space-y-6">
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-[8px]">
          <div className="relative aspect-[16/9]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              className="object-cover transition duration-700 group-hover:scale-[1.05]"
              priority={priority}
            />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg md:text-xl font-extrabold tracking-tight uppercase sat text-title">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {mainTech.map((techItem, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full border border-title"
              >
                {techItem}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
