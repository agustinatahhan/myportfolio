"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useMemo } from "react";
import { IoGlobeOutline } from "react-icons/io5";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  const navItems = [
    { key: "home", href: "#top" },
    { key: "about", href: "#about" },
    { key: "projects", href: "#work" },
  ];

  const basePath = useMemo(() => {
    if (!pathname) return "";
    return pathname.replace(/^\/(es|en)(?=\/|$)/, "") || "";
  }, [pathname]);

  const nextLocale = locale === "es" ? "en" : "es";

  const makeLocaleHref = (loc: string, hash = "") =>
    `/${loc}${basePath || ""}${hash}`;

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-bgNav ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center justify-start">
                <Link
                  href={`/${locale}#top`}
                  className="font-bold text-title text-lg"
                >
                  Agustina
                </Link>
              </div>

              {/* Desktop nav */}
              <div className="hidden sm:block">
                <div className="flex items-center gap-6 justify-center">
                  {navItems.map((item) => (
                    <Link
                      key={item.key}
                      href={`/${locale}${item.href}`}
                      className={cx(
                        "px-3 py-2 text-md font-medium rounded-4xl transition-colors",
                        "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Botón cambio de idioma */}
              <div className="hidden sm:block">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    href={makeLocaleHref(
                      nextLocale,
                      typeof window !== "undefined" ? window.location.hash : ""
                    )}
                    className="px-3 py-2 text-sm font-medium flex items-center gap-2 rounded-md
                 transition-all duration-200 
                  hover:scale-105 
                 active:scale-95 active:rotate-1"
                  >
                    <IoGlobeOutline
                      size={20}
                      className=" transition-transform duration-200 group-hover:rotate-12"
                    />
                    {locale.toUpperCase()}
                  </Link>
                </div>
              </div>

              {/* Mobile: lang + burger */}
              <div className="flex items-center gap-2 sm:hidden">
                <Link
                  href={makeLocaleHref(
                    nextLocale,
                    typeof window !== "undefined" ? window.location.hash : ""
                  )}
                  className="px-3 py-2 text-sm font-medium"
                >
                  {nextLocale.toUpperCase()}
                </Link>

                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:bg-[--color-muted]/40 hover:text-foreground focus:outline-2 focus:outline-[--color-brand]">
                  {open ? (
                    <XMarkIcon className="size-6" />
                  ) : (
                    <Bars3Icon className="size-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile panel */}
          <DisclosurePanel className="sm:hidden ">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navItems.map((item) => (
                <DisclosureButton
                  key={item.key}
                  as={Link}
                  href={`/${locale}${item.href}`}
                  className={cx(
                    "block rounded-4xl px-3 py-2 text-base font-medium transition-colors",
                    "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {t(item.key)}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
