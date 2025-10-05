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
import { useEffect, useMemo, useState } from "react";
import { IoGlobeOutline } from "react-icons/io5";
import Image from "next/image";
import { LanguageSwitcher } from "../lang/LanguageSwitcher";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");

  // scroll detect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // hash detect (solo en cliente)
  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const navItems = [
    { key: "home", href: "#top" },
    { key: "about", href: "#about" },
    { key: "projects", href: "#work" },
    { key: "skills", href: "#skills" },
  ];

  const basePath = useMemo(() => {
    if (!pathname) return "";
    return pathname.replace(/^\/(es|en)(?=\/|$)/, "") || "";
  }, [pathname]);

  const nextLocale = locale === "es" ? "en" : "es";

  const makeLocaleHref = (loc: string, hash = "") =>
    `/${loc}${basePath || ""}${hash}`;

  return (
    <Disclosure
      as="nav"
      className={cx(
        "sticky top-0 z-50 transition-all",
        scrolled ? "bg-background backdrop-blur shadow-sm" : "bg-background"
      )}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center justify-start w-12 h-12 sm:w-15 sm:h-15 relative">
                <Link href={`/${locale}#top`}>
                  <Image
                    src="/favicon.ico"
                    alt="logo"
                    fill
                    className="object-contain"
                    priority
                  />
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
                        "px-3 py-2 text-lg font-medium rounded-4xl transition-colors",
                        "hover:text-foreground hover:bg-[#cb82d4]/50"
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Botón cambio de idioma */}
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>

              {/* Mobile: lang + burger */}
              <div className="flex items-center gap-2 sm:hidden">
                <LanguageSwitcher />
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:bg-[#cb82d4]/50 hover:text-foreground focus:outline-2 focus:outline-[--color-brand]">
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
                    "text-foreground/80 hover:text-foreground hover:bg-[#cb82d4]/50"
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
