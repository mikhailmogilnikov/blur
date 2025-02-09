import "./globals.css";

import type { Metadata, Viewport } from "next";

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

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "auto",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000" />
      </head>
      <body
        className={clsx(
          sans.variable,
          mono.variable,
          "min-h-svh overflow-x-hidden overflow-y-auto bg-background text-foreground antialiased",
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
