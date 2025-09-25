// app/[locale]/_components/About.tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className="relative bg-about min-h-[85vh] -mt-6 flex items-center scroll-mt-2 overflow-hidden"
    >
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

      <div className="absolute -z-10 top-16 -left-10 w-72 h-72 bg-[#FF8FA3]/25 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-10 -right-10 w-[28rem] h-[28rem] bg-[#9B6BFF]/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative sm:w-[300px] sm:h-[300px] w-[180px] h-[180px] rounded-full overflow-hidden">
            <div
              className={`absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,_#FF8FA3_0%,_#9B6BFF_40%,_#D0E2B3_70%,_#FF8FA3_100%)] opacity-60 blur-[6px] animate-[spin_20s_linear_infinite]`}
            />

            <div className="absolute inset-0.5 rounded-full bg-background" />
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <Image
                src="/logoPort.png"
                alt="Agustina"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="text-center md:text-left space-y-6" data-aos="fade-up">
          <div>
            <h2 className="relative inline-block text-4xl sm:text-5xl font-bold">
              {t("about")}
              <span className="absolute left-0 -bottom-2 h-2 w-full bg-gradient-to-r from-[#FF8FA3] to-[#9B6BFF] rounded-full origin-left scale-x-0 animate-[grow_900ms_ease-out_forwards] [animation-delay:200ms]" />
            </h2>
          </div>

          <p className="text-lg leading-relaxed">
            {t("iam")}
            <span className="font-semibold text-gradient">{t("rol")}</span>
            {t("description")}
          </p>

          <p className="text-lg leading-relaxed">
            {t("currently")} <strong>{t("technologies")}</strong>
            {t("end")}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes grow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
