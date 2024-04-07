"use client";
import { useNavbar } from "@/hooks/navbar";
import { Menu } from "lucide-react";

export const NavbarMobileBtn: React.FC = () => {
  const { toggleNavbar } = useNavbar();

  return (
    <button
      className="text-muted-foreground ml-auto px-2.5 block md:hidden"
      onClick={toggleNavbar}
      data-umami-event="navbar-mobile-trigger"
    >
      <Menu />
    </button>
  );
};
