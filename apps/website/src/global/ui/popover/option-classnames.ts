import { VariantProps } from "tailwind-variants";

import { tv } from "../../lib/utils/styling/tv";

export const popoverOptionTV = tv({
  base: "rounded-md flex w-full text-sm font-medium p-2 bg-transparent items-center justify-between cursor-pointer transition-colors gap-8",
  variants: {
    color: {
      default:
        "text-foreground data-[active=true]:bg-foreground/10 hover:bg-foreground/10 active:bg-foreground/20 ",
      danger: "text-danger hover:bg-danger/10 active:bg-danger/20",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export type PopoverOptionTvProps = VariantProps<typeof popoverOptionTV>;
