import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="bg-bgNav min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col gap-4 text-center items-center justify-center -translate-y-10 sm:-translate-y-16">
        {/* Imagen circular */}
        <div className="relative sm:w-[300px] sm:h-[300px] w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg">
          <Image
            src="/logoPort.png"
            alt="Picture of the author"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Textos */}
        <h1 className="sm:text-7xl text-5xl font-bold">{t("title")}</h1>{" "}
        <h2 className="sm:text-6xl text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF8FA3] to-[#9B6BFF]">
          Front End Developer
        </h2>
        <h3 className="sm:text-3xl text-2xl font-normal text-gray-600">
          {" "}
          {t("description")}{" "}
        </h3>
      </div>
    </div>
  );
}
