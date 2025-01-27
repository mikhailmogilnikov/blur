import Link from "next/link";

import { Flex } from "@/src/global/ui/flex";
import { Typo } from "@/src/global/ui/typo";
import { APP_ROUTES } from "@/src/global/config/app";

export default async function NotFound() {
  return (
    <Flex
      col
      className="relative mx-auto h-svh max-w-screen-xl justify-center gap-4 p-4 py-12 xl:p-12"
    >
      <Typo as="h1" size="2xl">
        This page does not exist.
      </Typo>
      <Link
        href={APP_ROUTES.HOME}
        className="font-semibold text-foreground-500"
      >
        Move to home
      </Link>
    </Flex>
  );
}
