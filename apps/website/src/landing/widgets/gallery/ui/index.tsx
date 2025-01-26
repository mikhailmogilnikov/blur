import { ScrollArea } from "@blur-ui/scroll-area";
import { Squircle } from "@blur-ui/squircle";

import { Flex } from "@/src/global/ui/flex";
import { Typo } from "@/src/global/ui/typo";

export const LandingGallery = () => {
  return (
    <ScrollArea orientation="horizontal">
      <Flex className="gap-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <Flex key={index} className="flex-col gap-5">
            <Squircle className="aspect-[64/76] w-60 rounded-3xl bg-default sm:w-76"></Squircle>
            <Typo className="">Component</Typo>
          </Flex>
        ))}
      </Flex>
    </ScrollArea>
  );
};
