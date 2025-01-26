import { Ref } from "react";
import { VariantProps } from "tailwind-variants";

import { PolymorphicComponentProps } from "../types/polymorph";
import { tv } from "../lib/utils/styling/tv";

type TypoBaseProps = TypoTvProps;

type TypoAttributes = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

export type TypoProps<C extends TypoAttributes> = PolymorphicComponentProps<
  C,
  TypoBaseProps
>;

export const Typo = <T extends TypoAttributes = "p">(props: TypoProps<T>) => {
  const {
    children,
    as: Component = "p",
    className,
    ref,
    size,
    weight,
    ...rest
  } = props;

  const domRef = ref as Ref<HTMLParagraphElement>;

  const TypoClassName = typoTV({
    size,
    weight,
    className,
  });

  return (
    <Component ref={domRef} className={TypoClassName} {...rest}>
      {children}
    </Component>
  );
};

export const typoTV = tv({
  base: "",
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    },
    weight: {
      thin: "font-thin",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
      extraBold: "font-extrabold",
      extraBlack: "font-extrablack",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "semibold",
  },
});

export type TypoTvProps = VariantProps<typeof typoTV>;
