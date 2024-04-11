"use client";

import { CookieIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import { useTranslations } from "next-intl";

export default function CookieConsent({
  demo = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const t = useTranslations("cookies");

  const accept = () => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
    onAcceptCallback();
  };

  const decline = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
    }, 700);
    onDeclineCallback();
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true")) {
        if (!demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch (e) {}
  }, []);

  return (
    <div
      className={cn(
        "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden"
      )}
    >
      <div className="dark:bg-secondary bg-background rounded-md m-3 border border-border shadow-lg dark:shadow-none">
        <div className="grid gap-2">
          <div className="border-b border-border dark:border-background/20 h-14 flex items-center justify-between p-4">
            <h1 className="text-lg font-medium">{t("title")}</h1>
            <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
          </div>
          <div className="p-4">
            <p className="text-sm font-normal text-start">
              {t("description")}
              <br />
              <br />
              <span className="text-xs">
                {t("byclicking")}
                <span className="font-base opacity-80">{t("accept")}</span>
                {t("agreed")}
              </span>
              <br />
            </p>
          </div>
          <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
            <Button onClick={accept} className="w-full">
              {t("accept")}
            </Button>
            <Button onClick={decline} className="w-full" variant="secondary">
              {t("decline")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
