import { Slider } from "@blur-ui/slider";
import { Squircle } from "@blur-ui/squircle";
import { MeshGradient } from "@blur-ui/mesh-gradient";
import { Spinner } from "@blur-ui/spinner";

import { ShowreelComponent } from "../model/showreel.type";

import { Flex } from "@/src/global/ui/flex";

export const ShowreelComponents: ShowreelComponent[] = [
  {
    id: 1,
    name: "Mesh Gradient",
    slug: "mesh-gradient",
    content: () => {
      return (
        <MeshGradient className="h-full w-full" width={304} height={368} />
      );
    },
  },
  {
    id: 2,
    name: "Slider",
    slug: "slider",
    content: () => {
      return (
        <div className="flex h-full w-full items-center justify-center">
          <Slider
            classNames={{
              base: "w-20 h-50 bg-foreground/30 dark:bg-foreground/10 rounded-3xl outline-offset-2 outline-foreground/50 focus-visible:outline",
              track: "bg-default-100 dark:bg-foreground/80",
            }}
            orientation="vertical"
            value={0.5}
            fromStart
          />
        </div>
      );
    },
  },
  {
    id: 3,
    name: "Squircle",
    slug: "squircle",
    content: () => {
      return (
        <Flex col className="h-full w-full items-center justify-center">
          <Squircle className="size-30 rounded-3xl bg-primary" smoothing={1} />
        </Flex>
      );
    },
  },
  {
    id: 4,
    name: "Spinner",
    slug: "spinner",
    content: () => {
      return (
        <Flex col className="h-full w-full items-center justify-center gap-6">
          <Spinner className="size-6" segmentClassName="bg-foreground" />
          <Spinner
            className="size-8"
            segmentClassName="bg-foreground"
            animationDuration={0.5}
            segments={12}
          />
          <Spinner
            className="size-10"
            segments={8}
            animationDuration={1.5}
            segmentClassName="bg-link"
          />
        </Flex>
      );
    },
  },
  {
    id: 5,
    name: "Scroll Area",
    slug: "scroll-area",
    content: () => {
      return <div>Scroll Area</div>;
    },
  },
];
