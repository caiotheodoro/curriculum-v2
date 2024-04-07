import Link from "next/link";

import { NavLink } from "@/app/components/atoms/nav-link";

import { ThemeToggle } from "@/app/components/modecules/theme-toggle";

import { getNavbarMenu } from "@/utils/navbar/menu";
import { useTranslations } from "next-intl";
import { NavbarMobileBtn } from "./navbar-button";
import { LanguageToggle } from "@/app/components/modecules/language-toggle";
import { LocaleProps } from "@/@types/common";

export const Navbar = ({ locale }: LocaleProps) => {
  const t = useTranslations("navbar");
  const navMenu = getNavbarMenu(locale);

  return (
    <nav className="md:grid grid-cols-12 border-b flex items-center justify-between relative z-10 bg-background overflow-x-auto space-mono">
      <Link
        href="/"
        className="md:border-r md:px-5 px-2.5 py-4 text-foreground md:col-span-3 lg:col-span-2 shrink-0 transition-colors"
      >
        {t("author")}
      </Link>
      <div className="md:col-span-9 lg:col-span-10 flex items-center justify-between mr-2">
        <ul className="md:flex items-center divide-x w-max border-r hidden shrink-0">
          {navMenu.map((menu) => (
            <NavLink key={menu.name} href={menu.path}>
              {t(menu.name)}
            </NavLink>
          ))}
        </ul>
        <div className="flex items-center space-x-2">
          <LanguageToggle />
          <ThemeToggle />
          <NavbarMobileBtn />
        </div>
      </div>
    </nav>
  );
};
