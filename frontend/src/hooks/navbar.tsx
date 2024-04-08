"use client";
import { NavbarMobileContextProps } from "@/@types/common";
import { NavbarContext } from "@/context/navbar";
import { useContext } from "react";

export const useNavbar = (): NavbarMobileContextProps => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("Navbar error");
  }
  return context;
};
