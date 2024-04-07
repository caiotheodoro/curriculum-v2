"use client";
import { NavbarMobileContextProps } from "@/@types/common";
import { createContext } from "react";

export const NavbarContext = createContext<
  NavbarMobileContextProps | undefined
>(undefined);
