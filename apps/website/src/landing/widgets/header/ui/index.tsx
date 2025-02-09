import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";

import { APP_ROUTES } from "@/src/global/config/app";
import { Button } from "@/src/global/ui/button";
import { Flex } from "@/src/global/ui/flex";
import { Typo } from "@/src/global/ui/typo";

export const LandingHeader = () => {
  return (
    <Flex as="header" col className="gap-14">
      <Typo as="h1" className="text-gradient text-7xl">
        Blur.
      </Typo>

      <Typo as="h2" className="-mt-8 text-xl sm:text-2xl lg:text-3xl">
        <span className="text-foreground-500">
          React components collection to add some{" "}
        </span>
        <span className="text-gradient">magic</span>
        <span className="text-foreground-500"> to your apps.</span>
      </Typo>

      <Button
        as={Link}
        href={APP_ROUTES.DOCS_ARTICLE("getting-started")}
        className="group w-fit gap-2 rounded-full bg-link/20 px-6 py-1.5 text-base font-semibold text-link"
      >
        Start exploring
        <PiArrowRightBold className="text-xl transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Button>
    </Flex>
  );
};
