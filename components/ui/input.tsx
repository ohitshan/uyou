import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "h-10 min-h-10 shrink-0 rounded-md border border-border-strong bg-surface px-3",
          "text-body-lg text-text-primary",
          "placeholder:text-text-tertiary",
          "focus:border-primary focus:outline-none focus:ring-2 focus:ring-focus-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
