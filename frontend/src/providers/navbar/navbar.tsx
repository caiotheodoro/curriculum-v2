"use client";
import { ChildProps } from "@/@types/common";
import { useCallback, useMemo, useState } from "react";
import { NavbarContext } from "@/context/navbar";

export const NavbarProvider = ({ children }: ChildProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const contextValue = useMemo(
    () => ({ isOpen, toggleNavbar }),
    [isOpen, toggleNavbar]
  );

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
};
