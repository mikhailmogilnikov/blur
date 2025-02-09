import { Spinner } from "@blur-ui/spinner";

import { Flex } from "@/src/global/ui/flex";

export default function Loading() {
  return (
    <Flex col className="h-svh w-svw items-center justify-center">
      <Spinner className="size-7" segmentClassName="bg-foreground" />
    </Flex>
  );
}
