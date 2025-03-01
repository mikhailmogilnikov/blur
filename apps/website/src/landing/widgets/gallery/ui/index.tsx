"use client";

import { ScrollArea } from "@blur-ui/scroll-area";
import { useRef } from "react";
import clsx from "clsx";
import {
  PiArrowRightBold,
  PiCaretLeftBold,
  PiCaretRightBold,
} from "react-icons/pi";
import Link from "next/link";

import { Flex } from "@/src/global/ui/flex";
import { LandingCard } from "@/src/landing/entities/component/ui";
import { ShowreelComponents } from "@/src/landing/entities/component/config/showreel-components";
import { Typo } from "@/src/global/ui/typo";
import { APP_ROUTES } from "@/src/global/config/app";

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
    "flex aspect-square w-8 cursor-pointer items-center justify-center rounded-full bg-default shadow transition-all hover:opacity-80 active:scale-95",
  );

  return (
    <Flex col className="relative -mt-14 gap-6">
      <span className="shadow-circle absolute top-1/2 right-1/2 -z-10 aspect-square w-200 translate-x-1/2 -translate-y-1/2 animate-appear-zoom" />

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
          viewport: "outline-none mb-6",
          root: "max-lg:-ml-4 max-lg:w-[calc(100%+var(--spacing)*8)] -mb-4",
          scrollbar:
            "data-[state=visible]:animate-fade-in data-[state=hidden]:animate-fade-out user-select-none pointer-events-auto",
          horizontalScrollbar: "h-1.5 max-lg:px-4",
          thumb:
            "bg-foreground/10 hover:bg-foreground/20 transition-colors rounded-full ",
        }}
      >
        <Flex className="gap-6 py-1 max-lg:px-4 lg:gap-8">
          {ShowreelComponents.map((component) => (
            <LandingCard key={component.id} {...component} />
          ))}
          <Flex className="mb-12 h-60 w-40 items-center justify-start gap-2 self-center">
            <Link
              href={APP_ROUTES.DOCS.GUIDE("getting-started")}
              className="group flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-link transition-colors hover:bg-foreground/5"
            >
              <Typo>Browse all</Typo>
              <PiArrowRightBold className="text-xl transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </Link>
          </Flex>
        </Flex>
      </ScrollArea>
    </Flex>
  );
};
