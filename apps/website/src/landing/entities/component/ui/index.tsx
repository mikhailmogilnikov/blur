import { Squircle } from "@blur-ui/squircle";
import { PiCaretRightBold } from "react-icons/pi";
import Link from "next/link";

import { ShowreelComponent } from "../model/showreel.type";

import { Flex } from "@/src/global/ui/flex";
import { Typo } from "@/src/global/ui/typo";
import { APP_ROUTES } from "@/src/global/config/app";

export function LandingCard(props: ShowreelComponent) {
  return (
    <Flex
      as={Link}
      href={APP_ROUTES.DOCS_ARTICLE(props.slug)}
      className="flex-col gap-5"
    >
      <Squircle
        wrapperClassName="shadow-md rounded-[18px]"
        className="h-74 w-60 rounded-2xl bg-default sm:h-92 sm:w-76"
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
