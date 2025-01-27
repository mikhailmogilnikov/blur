import { useTheme } from "next-themes";
import { ReactNode, useEffect } from "react";

import { updateThemeColor } from "./update-theme-color";

type Props = {
  children: ReactNode;
};

export const ThemeColorProvider = ({ children }: Props) => {
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    updateThemeColor(resolvedTheme as "light" | "dark");
  }, [theme, resolvedTheme]);

  return <>{children}</>;
};
