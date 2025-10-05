"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type Props = { className?: string };

export function LanguageSwitcher({ className = "" }: Props) {
  const locale = useLocale(); 
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => setHash(window.location.hash), []);

  const basePath = useMemo(() => {
    if (!pathname) return "";
    return pathname.replace(/^\/(es|en)(?=\/|$)/, "") || "";
  }, [pathname]);

  const makeHref = (loc: "es" | "en") => `/${loc}${basePath}${hash}`;

  const Item = ({
    loc,
    label,
  }: {
    loc: "es" | "en";
    label: string;
  }) => {
    const active = locale === loc;
    return (
      <Link
        href={makeHref(loc)}
        aria-label={`Cambiar idioma a ${label}`}
        aria-current={active ? "page" : undefined}
        className={[
          "px-3 py-1.5 text-sm font-medium rounded-full transition-all",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2d2a24]",
          active
            ? "bg-[#2d2a24]/80 text-background shadow-sm"
            : "text-foreground/80 hover:bg-[#2d2a24]/30",
        ].join(" ")}
      >
        {label}
      </Link>
    );
  };

  return (
    <div
      className={[
        "inline-flex items-center gap-1 rounded-full p-1",
        "bg-background/80 backdrop-blur border border-black/5 shadow-sm",
        className,
      ].join(" ")}
      role="group"
      aria-label="Selector de idioma"
    >
      <Item loc="es" label="ES" />
      <Item loc="en" label="EN" />
    </div>
  );
}
