import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const Footer = () => {
  const media = {
    github: "https://www.github.com/agustinatahhan",
    linkedin: "https://www.linkedin.com/in/agustinatahhan",
    mail: "mailto:agustahhan@gmail.com",
  };

  const t = useTranslations("Footer");

  return (
    <footer className="bg-mocha text-background px-8 py-12 flex flex-col items-center gap-12 text-center md:flex-row md:justify-center md:items-center md:gap-16 md:text-left">
      {/* Texto */}
      <div className="text-4xl md:text-5xl font-bold text-center sat uppercase text-vainilla">
        {t("lets")} <br /> {t("together")}
      </div>

      <ul className="flex flex-col gap-6 items-start md:gap-6 md:items-start">
        <li>
          <a
            href={media.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-mochita/20 hover:bg-mochita/30 transition-transform duration-300 group-hover:scale-110">
              <FaLinkedin size={22} color="#faf8f5" aria-hidden />
            </div>
            <span className="transition-transform duration-300 group-hover:scale-105 text-vainilla sat">
              Agustina Tahhan
            </span>
          </a>
        </li>

        <li>
          <a
            href={media.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-mochita/20 hover:bg-mochita/30 transition-transform duration-300 group-hover:scale-110">
              <FaGithub size={22} color="#faf8f5" aria-hidden />
            </div>
            <span className="transition-transform duration-300 group-hover:scale-105  text-vainilla sat">
              /agustinatahhan
            </span>
          </a>
        </li>

        <li>
          <a
            href={media.mail}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-mochita/20 hover:bg-mochita/30 transition-transform duration-300 group-hover:scale-110">
              <IoIosMail size={22} color="#faf8f5" aria-hidden />
            </div>
            <span className="transition-transform duration-300 group-hover:scale-105   text-vainilla sat">
              agustahhan@gmail.com
            </span>
          </a>
        </li>
      </ul>
    </footer>
  );
};
