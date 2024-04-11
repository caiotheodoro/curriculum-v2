import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { LayoutProps } from "@/@types/common";
import { Provider } from "@/providers";
import  NavbarMobile  from "@/app/components/organisms/navbar/navbar-mobile";
import { NavbarProvider } from "@/providers/navbar/navbar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import CookieConsent from "@/app/components/molecules/cookie-consent/cookie-consent";
import { SocialMenu } from "../components/molecules/social-menu";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/app/components/organisms/navbar/navbar";

export const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const fontInter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caio Theodoro Curriculum",
  description: "All about Caio Theodoro",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<LayoutProps>) {
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          spaceMono.variable,
          GeistSans.variable,
          fontInter.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Provider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavbarProvider>
              <Navbar locale={locale} />
              <NavbarMobile locale={locale} />
            </NavbarProvider>
            <main className="space-mono lg:px-16 lg:pt-28 md:p-8 md:pt-20 sm:p-8 sm:pt-20 pt-24 p-8 max-w-4xl m-auto">
              {children}
            </main>
            <SocialMenu />
          </Provider>
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
