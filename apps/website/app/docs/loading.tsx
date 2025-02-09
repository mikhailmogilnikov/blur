import { Spinner } from "@blur-ui/spinner";

import { Flex } from "@/src/global/ui/flex";

export const FullscreenLoading = () => {
  return (
    <Flex col className="h-dvh w-dvw items-center justify-center">
      <Spinner className="size-7" segmentClassName="bg-foreground" />
    </Flex>
  );
};

export default async function Loading() {
  "use cache";

  return <FullscreenLoading />;
}
