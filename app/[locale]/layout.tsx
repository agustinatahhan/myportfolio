import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import localFont from "next/font/local";
import Navbar from "../components/navigation/Navbar";
import { Footer } from "../components/navigation/Footer";

const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/Satoshi-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={satoshi.variable}>
      <body className="font-sans font-normal">
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
