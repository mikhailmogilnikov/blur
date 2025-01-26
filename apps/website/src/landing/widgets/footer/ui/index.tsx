import { Squircle } from "@blur-ui/squircle";

import { Flex } from "@/src/global/ui/flex";

export const LandingFooter = () => {
  return (
    <Flex as="footer" className="gap-6">
      <Squircle className="rounded-xl bg-default px-6 py-3 font-semibold">
        Build by <span className="text-link">Mikhail Mogilnikov</span>
      </Squircle>
    </Flex>
  );
};
