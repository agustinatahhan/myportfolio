type Props = {
  index: number;
  tech: string;
};

const techColors: Record<string, string> = {
  "React.js": "bg-[#d6e8ff] text-[#2d2a24]",
  "Next.js": "bg-[#f0e6ff] text-[#2d2a24]",
  "Node.js": "bg-[#d8f0d2] text-[#2d2a24]",
  "Express.js": "bg-[#ffe6d9] text-[#2d2a24]",
  PostgreSQL: "bg-[#d7e4f5] text-[#2d2a24]",
  Sequelize: "bg-[#e5d9f7] text-[#2d2a24]",
  JavaScript: "bg-[#fff1b8] text-[#2d2a24]",
  TypeScript: "bg-[#d6e6ff] text-[#2d2a24]",
  HTML: "bg-[#ffd6cc] text-[#2d2a24]",
  CSS: "bg-[#d9dbff] text-[#2d2a24]",
  "Email.js": "bg-[#ffd6e0] text-[#2d2a24]",
  Vercel: "bg-[#fceedd] text-[#2d2a24]",
  Git: "bg-[#fdded1] text-[#2d2a24]",
  "Tailwind CSS": "bg-[#d2f0f4] text-[#2d2a24]",
  Bootstrap: "bg-[#e2d6f7] text-[#2d2a24]",
  default: "bg-[#f3e6ff] text-[#2d2a24]",
};

const getTechColor = (tech: string): string =>
  techColors[tech] || techColors.default;

export const TechStack = ({ index, tech }: Props) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl sm:px-4 sm:py-1.5 px-2 py-1 font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${getTechColor(
        tech
      )}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
      <div className="relative flex items-center gap-2">
        <span className="font-regular tracking-wide">{tech}</span>
      </div>
    </div>
  );
};
