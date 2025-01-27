"use client";

import {
  PopoverContentProps,
  PopoverContent as PopoverContentPrimitive,
} from "@radix-ui/react-popover";
import { Squircle } from "@blur-ui/squircle";

import { cn } from "../../lib/utils/styling/cn";

export const PopoverContent = (props: PopoverContentProps) => {
  const { className, sideOffset = 10, ...rest } = props;

  const popoverContentClassNames = cn(
    "text-content3-foreground z-10000 flex w-fit flex-col gap-1 rounded-lg bg-default p-2 shadow-md outline-none data-[side='bottom']:origin-top data-[side='top']:origin-bottom data-[state=closed]:animate-popover-out data-[state=open]:animate-popover-in",
    className,
  );

  return (
    <Squircle asChild>
      <PopoverContentPrimitive
        className={popoverContentClassNames}
        sideOffset={sideOffset}
        {...rest}
      />
    </Squircle>
  );
};
