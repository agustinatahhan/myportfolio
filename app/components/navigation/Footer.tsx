import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const Footer = () => {

    const media = {
        "github": "https://www.github.com/agustinatahhan",
        "linkedin": "https://www.linkedin.com/in/agustinatahhan",
        "mail": "mailto:agustahhan@gmail.com"
    }
  return (
    <div className="relative bg-title h-80 -mt-6 flex items-center scroll-mt-2 overflow-hidden">
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
      <div className="flex flex-col w-full items-center justify-center gap-4">
        <h4 className="text-background font-bold text-2xl sm:text-4xl">Get in touch</h4>
        <div className="flex flex-row items-center justify-center gap-2">
          <a href={media.github} className="text-background py-3 px-3 rounded-full bg-description hover:bg-description/50"><FaGithub size={25} /></a>
          <a href={media.linkedin} className="text-background py-3 px-3 rounded-full bg-description  hover:bg-description/50"><FaLinkedin size={25} /></a>
          <a href={media.mail} className="text-background py-3 px-3 rounded-full bg-description  hover:bg-description/50"><IoIosMail size={25} /></a>
        </div>
      </div>
    </div>
  );
}; 
