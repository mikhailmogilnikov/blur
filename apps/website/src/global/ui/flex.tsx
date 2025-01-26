import { ElementType } from "react";
import { VariantProps } from "tailwind-variants";

import { tv } from "../lib/utils/styling/tv";
import { PolymorphicComponentProps } from "../types/polymorph";

type FlexBaseProps = FlexTvProps;

export type FlexProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  FlexBaseProps
>;

export const Flex = <T extends ElementType = "div">(props: FlexProps<T>) => {
  const {
    children,
    as: Component = "div",
    justify,
    align,
    col,
    wrap,
    gap,
    inline,
    className,
    ...rest
  } = props;

  const FlexClassName = flexTV({
    justify,
    align,
    col,
    className,
    inline,
    wrap,
    gap,
  });

  return (
    <Component {...rest} className={FlexClassName}>
      {children}
    </Component>
  );
};

export const flexTV = tv({
  base: "",
  variants: {
    justify: {
      center: "justify-center",
      start: "justify-start",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    align: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    inline: {
      false: "flex",
      true: "inline-flex",
    },
    col: {
      true: "flex-col",
    },
    wrap: {
      true: "flex-wrap",
    },
    gap: {
      true: "gap-4",
    },
  },
  defaultVariants: {
    gap: true,
    inline: false,
  },
});

export type FlexTvProps = VariantProps<typeof flexTV>;
