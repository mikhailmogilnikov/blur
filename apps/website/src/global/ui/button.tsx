import { ElementType } from "react";
import { VariantProps } from "tailwind-variants";

import { tv } from "../lib/utils/styling/tv";
import { PolymorphicComponentProps } from "../types/polymorph";

type ButtonBaseProps = ButtonTvProps;

export type ButtonProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  ButtonBaseProps
>;

export const Button = <T extends ElementType = "button">(
  props: ButtonProps<T>,
) => {
  const {
    children,
    as: Component = "button",
    variant,
    color,
    size,
    isLoading,
    isDisabled,
    className,
    ...rest
  } = props;

  const buttonClassNames = buttonTV({
    variant,
    color,
    size,
    isLoading,
    isDisabled,
    className,
  });

  return (
    <Component
      {...rest}
      className={buttonClassNames}
      disabled={isDisabled || isLoading}
    >
      {/* {isLoading ? <Spinner color={color} size={20} /> : children} */}
      {children}
    </Component>
  );
};

export const buttonTV = tv({
  base: "inline-flex items-center justify-center font-medium transition-all cursor-pointer hover:brightness-90 active:scale-95 outline-none",
  variants: {
    variant: {
      default: "bg-default text-default-foreground",
    },
    color: {
      default: "bg-default text-default-foreground",
      primary: "bg-primary text-primary-foreground",
      success: "bg-success text-success-foreground",
      warning: "bg-warning text-warning-foreground",
      danger: "bg-danger text-danger-foreground",
    },
    size: {
      sm: "px-2 h-8 text-sm rounded-md",
      md: "px-3 h-10 text-base rounded-lg",
      lg: "px-4 h-12 text-lg rounded-lg",
    },
    isLoading: {
      true: "opacity-50 pointer-events-none active:scale-100 cursor-default",
    },
    isDisabled: {
      true: "opacity-50 pointer-events-none active:scale-100 cursor-default",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});

export type ButtonTvProps = VariantProps<typeof buttonTV>;
