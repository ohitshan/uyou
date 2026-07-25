import * as React from "react";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring disabled:pointer-events-none disabled:bg-disabled-bg disabled:text-disabled-text",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-hover active:bg-primary-active",
        secondary:
          "bg-surface text-text-primary border border-border-strong hover:bg-primary-light",
        ghost: "bg-transparent text-primary hover:bg-primary-light",
        destructive: "bg-error text-white hover:opacity-90 active:opacity-80",
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-md",
        md: "h-10 px-4 text-sm rounded-md",
        lg: "h-12 px-5 text-base font-semibold rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  render?: useRender.RenderProp;
}

function Button({
  className,
  variant,
  size,
  render = <button />,
  ...props
}: ButtonProps) {
  return useRender({
    render,
    props: {
      className: cn(buttonVariants({ variant, size, className })),
      ...props,
    },
  });
}

export { Button, buttonVariants };