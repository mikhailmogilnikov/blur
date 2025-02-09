"use cache";

import { Flex } from "@/src/global/ui/flex";
import { LandingHeader } from "@/src/landing/widgets/header";
import { LandingGallery } from "@/src/landing/widgets/gallery";
import { LandingFooter } from "@/src/landing/widgets/footer";

export default async function Home() {
  return (
    <Flex
      as="main"
      col
      className="relative mx-auto max-w-screen-xl gap-14 p-4 py-12 max-xl:overflow-hidden xl:p-12"
    >
      <LandingHeader />
      <LandingGallery />
      <LandingFooter />
    </Flex>
  );
}
