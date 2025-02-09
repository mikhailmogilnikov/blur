"use client";

import { Squircle } from "@blur-ui/squircle";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Skeleton } from "@blur-ui/skeleton";

import { Flex } from "@/src/global/ui/flex";
import { Button } from "@/src/global/ui/button";

const DynamicChangeTheme = dynamic(
  () => import("./change-theme").then((mod) => mod.ChangeThemeLanding),
  {
    ssr: false,
    loading: () => (
      <Skeleton
        className="h-12 w-13.5 rounded-xl bg-default"
        shadowClassName="bg-default-300"
        animationDuration={0.5}
      />
    ),
  },
);

export const LandingFooter = () => {
  return (
    <Flex as="footer" wrap className="gap-4">
      <Squircle asChild>
        <Button
          as={Link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mikhailmogilnikov"
          className="gap-1 rounded-xl bg-default px-6 py-1 font-semibold"
        >
          Build by <span className="text-link">Mikhail Mogilnikov</span>
        </Button>
      </Squircle>
      <DynamicChangeTheme />
    </Flex>
  );
};
