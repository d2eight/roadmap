"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Toggle as TogglePrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-1 rounded-3xl text-sm font-medium whitespace-nowrap transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border border-input bg-transparent hover:bg-muted',
        secondary:
          '[--orig-bg:#F8F9FA] [--hover-bg:#F1F3F5] [--pressed-bg:#E9ECEF] [--text:#495057] [--border:#DEE2E6] data-[state=off]:unPressedButton data-[state=on]:pressedButton',

        destructive:
          '[--orig-bg:#FFE3E3] [--hover-bg:#FFC9C9] [--pressed-bg:#FF8787] [--text:#C92A2A] [--border:#FFB3B3] data-[state=off]:unPressedButton data-[state=on]:pressedButton',

        success:
          '[--orig-bg:#BDECBF] [--hover-bg:#8FDC95] [--pressed-bg:#4CAF50] [--text:#155724] [--border:#7BC67E] data-[state=off]:unPressedButton data-[state=on]:pressedButton',

        inwork:
          '[--orig-bg:#FFE8B3] [--hover-bg:#FFD670] [--pressed-bg:#F5C24F] [--text:#8A5300] [--border:#F2C35B] data-[state=off]:unPressedButton data-[state=on]:pressedButton',
      },
      size: {
        default:
          'h-9 min-w-9 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5',
        sm: 'h-8 min-w-8 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        lg: 'h-10 min-w-10 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
