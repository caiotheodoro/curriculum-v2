"use client";
import { COOKIE_ENUM } from "@/@enums/cookie";
import { Button } from "@/app/components/ui/button";
import { BrIcon } from "@/icons/br";
import { UsIcon } from "@/icons/us";
import CookieService from "@/services/cookies";
import { removeLocaleFromPath } from "@/utils/format";
import { useRouter, usePathname } from "next/navigation";

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = CookieService.getCookieFromBrowser(COOKIE_ENUM.NEXT_LOCALE);

  const handleToggle = () => {
    const newLocale = locale === "en" ? "pt" : "en";
    CookieService.setCookieFromBrowser(COOKIE_ENUM.NEXT_LOCALE, newLocale);
    router.push(`/${newLocale}${removeLocaleFromPath(pathname)}`);
  };

  return (
    <Button variant="outline" size="icon" onClick={handleToggle}>
      {locale === "en" ? <UsIcon /> : <BrIcon />}
      <span className="sr-only">Toggle language</span>{" "}
    </Button>
  );
}
