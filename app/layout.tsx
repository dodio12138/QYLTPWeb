import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { LanguageProvider } from "@/components/LanguageProvider";
import { getSiteInfo } from "@/lib/content";

const site = getSiteInfo();

export const metadata: Metadata = {
  title: `${site.name.en} | London`,
  description: site.description.en
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <SiteHeader />
          <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
