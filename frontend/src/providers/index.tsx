"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { TrpcProvider } from "@/providers/trpc/trpc";

export function Provider({ children, ...props }: Readonly<ThemeProviderProps>) {
  return (
    <NextThemesProvider {...props}>
      <TrpcProvider>{children}</TrpcProvider>
    </NextThemesProvider>
  );
}
