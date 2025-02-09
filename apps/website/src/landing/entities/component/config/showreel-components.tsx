import { MeshGradient } from "@blur-ui/mesh-gradient";
import { Slider } from "@blur-ui/slider";

import { ShowreelComponent } from "../model/showreel.type";

export const ShowreelComponents: ShowreelComponent[] = [
  {
    id: 1,
    name: "Mesh Gradient",
    slug: "mesh-gradient",
    content: () => {
      return <MeshGradient className="h-full w-full" seed={4} />;
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
              base: "w-20 h-56 bg-foreground/10 rounded-3xl outline-offset-2 outline-foreground/50 focus-visible:outline",
              track: "bg-foreground/20 dark:bg-foreground/80",
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
      return <div>Squircle</div>;
    },
  },
  {
    id: 4,
    name: "Spinner",
    slug: "spinner",
    content: () => {
      return <div>Spinner</div>;
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
