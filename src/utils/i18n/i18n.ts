import CookieService from "@/services/cookies";


export const getLocale = () => {
  const locale = CookieService.getCookieFromBrowser("NEXT_LOCALE");
  return locale || "en";
}