import "./globals.css";

import type { Metadata } from "next";

import { Geist_Mono, Inter } from "next/font/google";
import clsx from "clsx";

import Providers from "./providers";

import { APP_CONFIG } from "@/src/global/config/app";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={clsx(
          sans.variable,
          mono.variable,
          "bg-background text-foreground antialiased",
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
