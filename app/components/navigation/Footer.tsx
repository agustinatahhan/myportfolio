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
    <footer className="relative bg-title h-96 text-background px-8 py-12 flex flex-col md:flex-row md:justify-center md:items-center gap-12">
      {/* SVG de ola decorativa */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[100px] text-[#f9f8f4]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,64L40,69.3C80,75,160,85,240,96C320,107,400,117,480,128C560,139,640,149,720,138.7C800,128,880,96,960,117.3C1040,139,1120,213,1200,224C1280,235,1360,181,1400,154.7L1440,128L1440,320L0,320Z" />
        </svg>
      </div>

      <div className="text-4xl md:text-5xl font-bold text-center md:text-left leading-tight max-w-xs">
        {t("Footer.lets")} <br/> {t("Footer.together")}
      </div>

      <div className="flex flex-col gap-4">
        <a
          href={media.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <div className="bg-description hover:bg-description/50 rounded-full p-3 text-background transition-transform duration-300 group-hover:scale-110">
            <FaLinkedin size={25} color="#faf8f5" />
          </div>
          <span className="transition-transform duration-300 group-hover:scale-105">
            Agustina Tahhan
          </span>
        </a>

        <a
          href={media.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <div className="bg-description hover:bg-description/50 rounded-full p-3 text-background transition-transform duration-300 group-hover:scale-110">
            <FaGithub size={25} color="#faf8f5" />
          </div>
          <span className="transition-transform duration-300 group-hover:scale-105">
            /agustinatahhan
          </span>
        </a>

        <a
          href={media.mail}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <div className="bg-description hover:bg-description/50 rounded-full p-3 text-background transition-transform duration-300 group-hover:scale-110">
            <IoIosMail size={25} color="#faf8f5" />
          </div>
          <span className="transition-transform duration-300 group-hover:scale-105">
            agustahhan@gmail.com
          </span>
        </a>
      </div>
    </footer>
  );
};
