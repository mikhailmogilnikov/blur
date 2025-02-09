import { Squircle } from "@blur-ui/squircle";
import { PiCaretRightBold } from "react-icons/pi";

import { ShowreelComponent } from "../model/showreel.type";

import { Flex } from "@/src/global/ui/flex";
import { Typo } from "@/src/global/ui/typo";

export function LandingCard(props: ShowreelComponent) {
  return (
    <Flex className="flex-col gap-5">
      <Squircle
        wrapperClassName="shadow-md rounded-[18px]"
        className="aspect-[64/76] w-60 rounded-2xl bg-default sm:w-76"
      >
        {props.content({})}
      </Squircle>
      <Flex justify="between" align="center">
        <Typo>{props.name}</Typo>
        <PiCaretRightBold className="text-xl" />
      </Flex>
    </Flex>
  );
}
