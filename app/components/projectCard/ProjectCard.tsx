"use client";

import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  href: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
};

export default function ProjectCard({
  href,
  title,
  imageSrc,
  imageAlt,
  priority = false,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block focus:outline-none">
      <div className="relative w-full overflow-hidden rounded-lg transition hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9B6BFF] shadow-lg">
        <div className="relative aspect-[16/10] sm:aspect-[16/9]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

            className="object-cover transition duration-700 group-hover:scale-[1.05]"
            priority={priority}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <h3 className="text-white text-lg sm:text-xl font-semibold tracking-tight">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
