import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const Footer = () => {
  const media = {
    github: "https://www.github.com/agustinatahhan",
    linkedin: "https://www.linkedin.com/in/agustinatahhan",
    mail: "mailto:agustahhan@gmail.com",
  };

  const t = useTranslations();

  return (
    <footer className="bg-title text-background px-8 py-12 flex flex-col items-center md:flex-row md:justify-center md:items-start gap-12 text-center md:text-left">
      <div className="text-4xl md:text-5xl font-bold leading-tight max-w-xs">
        {t("Footer.lets")} <br /> {t("Footer.together")}
      </div>

      <nav className="w-full max-w-xs mx-auto">
        <ul className="flex flex-col gap-4 items-center md:items-start">
          <li>
            <a
              href={media.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[3rem,1fr] items-center gap-3 justify-items-center md:justify-items-start group"
            >
              <div className="w-12 h-12 min-w-[3rem] flex items-center justify-center rounded-full bg-description hover:bg-description/50 transition-transform duration-300 group-hover:scale-110">
                <FaLinkedin className="shrink-0" size={22} color="#faf8f5" aria-hidden />
              </div>
              <span className="leading-[1] transition-transform duration-300 group-hover:scale-105">
                Agustina Tahhan
              </span>
            </a>
          </li>

          <li>
            <a
              href={media.github}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[3rem,1fr] items-center gap-3 justify-items-center md:justify-items-start group"
            >
              <div className="w-12 h-12 min-w-[3rem] flex items-center justify-center rounded-full bg-description hover:bg-description/50 transition-transform duration-300 group-hover:scale-110">
                <FaGithub className="shrink-0" size={22} color="#faf8f5" aria-hidden />
              </div>
              <span className="leading-[1] transition-transform duration-300 group-hover:scale-105">
                /agustinatahhan
              </span>
            </a>
          </li>

          <li>
            <a
              href={media.mail}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[3rem,1fr] items-center gap-3 justify-items-center md:justify-items-start group"
            >
              <div className="w-12 h-12 min-w-[3rem] flex items-center justify-center rounded-full bg-description hover:bg-description/50 transition-transform duration-300 group-hover:scale-110">
                <IoIosMail className="shrink-0" size={22} color="#faf8f5" aria-hidden />
              </div>
              <span className="leading-[1] transition-transform duration-300 group-hover:scale-105">
                agustahhan@gmail.com
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
