import { HTMLAttributes } from "react";
import { PopoverClose } from "@radix-ui/react-popover";
import { Squircle } from "@blur-ui/squircle";

import { Flex } from "../flex";

import { popoverOptionTV, PopoverOptionTvProps } from "./option-classnames";

export type PopoverOptionProps = HTMLAttributes<HTMLButtonElement> &
  PopoverOptionTvProps & {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
  };

export const PopoverOption = (props: PopoverOptionProps) => {
  const { className, color, children, startContent, endContent, ...rest } =
    props;

  const popoverOptionClassNames = popoverOptionTV({ className, color });

  return (
    <Squircle asChild>
      <PopoverClose asChild>
        <button {...rest} className={popoverOptionClassNames}>
          <Flex align="center" className="gap-2">
            {startContent}
            {children}
          </Flex>
          {endContent}
        </button>
      </PopoverClose>
    </Squircle>
  );
};
