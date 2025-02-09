"use client";

import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { PiDevicesBold, PiMoonBold, PiSunBold } from "react-icons/pi";
import { useTheme } from "next-themes";
import { IconType } from "react-icons/lib";

import { PopoverContent, PopoverOption } from "@/src/global/ui/popover";

export enum AppTheme {
  Light = "light",
  Dark = "dark",
  System = "system",
}

export const AppThemeIcons: Record<AppTheme, IconType> = {
  [AppTheme.Light]: PiSunBold,
  [AppTheme.Dark]: PiMoonBold,
  [AppTheme.System]: PiDevicesBold,
} as const;

export const ChangeTheme = ({ children }: { children: React.ReactNode }) => {
  const { setTheme, theme } = useTheme();

  if (!theme) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>
        {Object.values(AppTheme).map((themeValue) => {
          const Icon = AppThemeIcons[themeValue];

          return (
            <PopoverOption
              key={themeValue}
              data-active={theme === themeValue}
              endContent={<Icon size={16} />}
              onClick={() => setTheme(themeValue)}
            >
              {themeValue.charAt(0).toUpperCase() + themeValue.slice(1)}
            </PopoverOption>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};
