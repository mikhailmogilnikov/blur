import { useTheme } from "next-themes";
import { Squircle } from "@blur-ui/squircle";

import {
  AppTheme,
  AppThemeIcons,
  ChangeTheme,
} from "@/src/global/features/change-theme";
import { Button } from "@/src/global/ui/button";

export const ChangeThemeLanding = () => {
  const { theme } = useTheme();

  const ThemeIcon = AppThemeIcons[theme as AppTheme];

  return (
    <ChangeTheme>
      <Squircle asChild>
        <Button className="gap-1 rounded-xl bg-default px-4 py-1 font-semibold">
          <ThemeIcon size={22} />
        </Button>
      </Squircle>
    </ChangeTheme>
  );
};
