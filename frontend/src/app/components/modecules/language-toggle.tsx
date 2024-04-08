"use client";
import { COOKIE_ENUM } from "@/@enums/cookie";
import { Button } from "@/app/components/ui/button";

import CookieService from "@/services/cookies";
import { useRouter, usePathname } from "next/navigation";
import { US as UsIcon, BR as BrIcon } from "country-flag-icons/react/3x2";
export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const getLocale = () => {
    return pathname.startsWith("/pt") ? "pt" : "en";
  };

  const handleToggle = () => {
    const newLocale = pathname.startsWith("/pt") ? "en" : "pt";
    CookieService.setCookieFromBrowser(COOKIE_ENUM.NEXT_LOCALE, newLocale);

    router.push(pathname.replace(getLocale(), newLocale));
  };

  const getCurrentFlag = () => {
    return getLocale() === "en" ? (
      <UsIcon className="w-7" />
    ) : (
      <BrIcon className="w-7" />
    );
  };

  return (
    <Button variant="outline" size="icon" onClick={handleToggle}>
      {getCurrentFlag()}
      <span className="sr-only">Toggle language</span>{" "}
    </Button>
  );
}
