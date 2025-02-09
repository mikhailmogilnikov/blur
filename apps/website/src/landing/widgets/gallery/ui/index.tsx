"use client";

import { ScrollArea } from "@blur-ui/scroll-area";
import { Squircle } from "@blur-ui/squircle";
import { useRef } from "react";
import clsx from "clsx";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

import { Flex } from "@/src/global/ui/flex";
import { Typo } from "@/src/global/ui/typo";
const SCROLL_AMOUNT = 300;

export const LandingGallery = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollAreaRef.current) {
      const currentScrollLeft = scrollAreaRef.current.scrollLeft;

      scrollAreaRef.current.scrollTo({
        left:
          direction === "left"
            ? currentScrollLeft - SCROLL_AMOUNT
            : currentScrollLeft + SCROLL_AMOUNT,
        behavior: "smooth",
      });
    }
  };

  const buttonClassName = clsx(
    "flex aspect-square w-8 cursor-pointer items-center justify-center rounded-full bg-default transition-all hover:opacity-80 active:scale-95",
  );

  return (
    <Flex col className="relative -mt-14 gap-6">
      <span className="shadow-circle absolute top-1/2 right-1/2 -z-10 aspect-square w-200 -translate-y-1/2 translate-x-1/2 animate-appear-zoom" />

      <Flex justify="end" className="gap-3">
        <button
          onClick={() => handleScroll("left")}
          className={buttonClassName}
        >
          <PiCaretLeftBold className="text-xl" />
        </button>
        <button
          onClick={() => handleScroll("right")}
          className={buttonClassName}
        >
          <PiCaretRightBold className="text-xl" />
        </button>
      </Flex>
      <ScrollArea
        orientation="horizontal"
        ref={scrollAreaRef}
        classNames={{
          viewport: "outline-none",
          root: "max-lg:-ml-4 max-lg:w-[calc(100%+var(--spacing)*8)]",
        }}
      >
        <Flex className="gap-6 py-1 max-lg:px-4 lg:gap-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <Flex key={index} className="flex-col gap-5">
              <Squircle
                wrapperClassName="shadow-md rounded-[18px]"
                className="aspect-[64/76] w-60 rounded-2xl bg-default sm:w-76"
              ></Squircle>
              <Flex justify="between" align="center">
                <Typo className="">Component</Typo>
                <PiCaretRightBold className="text-xl" />
              </Flex>
            </Flex>
          ))}
        </Flex>
      </ScrollArea>
    </Flex>
  );
};
