"use client";

import { ThemeProvider } from "next-themes";

import { ThemeColorProvider } from "@/src/global/lib/providers/theme-color-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeColorProvider>{children}</ThemeColorProvider>
    </ThemeProvider>
  );
}
