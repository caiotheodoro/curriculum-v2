"use client";
import Link from "next/link";
import { Fragment } from "react";
import { FadeIn, AnimatePresence } from "@/app/components/atoms/fade-in";
import { useNavbar } from "@/hooks/navbar";
import { LocaleProps } from "@/@types/common";
import { getNavbarMenu } from "@/utils/navbar/menu";
import { useTranslations } from "next-intl";

export const NavbarMobile = ({ locale }: LocaleProps) => {
  const t = useTranslations("navbar");
  const { isOpen, toggleNavbar } = useNavbar();
  const navSubMenu = getNavbarMenu(locale);

  return (
    <AnimatePresence>
      {isOpen && (
        <FadeIn
          fromTopToBottom
          className="absolute top-[57px] left-0 bg-background h-[calc(100%-57px-27px)] w-full z-50 p-5 divide-y overflow-y-auto"
        >
          {navSubMenu.map((menu, i) => (
            <Fragment key={menu.name}>
              <Link
                href={menu.path}
                className="block text-2xl py-4 first:pt-0 last:pb-0"
                onClick={toggleNavbar}
              >
                {t(menu.name)}
              </Link>
            </Fragment>
          ))}
        </FadeIn>
      )}
    </AnimatePresence>
  );
};
