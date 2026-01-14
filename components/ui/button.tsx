import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-black text-white rounded-xl shadow-[0px_6px_0px_0px_rgba(221,252,123,1)] hover:translate-y-[-2px] hover:shadow-[0px_8px_0px_0px_rgba(221,252,123,1)] active:translate-y-[2px] active:shadow-[0px_4px_0px_0px_rgba(221,252,123,1)]",
        secondary:
          "bg-[#DDFC7B] text-black border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]",
        outline:
          "border-2 border-black bg-white text-black rounded-lg hover:bg-stone-50",
        ghost:
          "text-stone-600 hover:text-black hover:bg-stone-100 rounded-lg",
        link: "text-black underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2 text-sm",
        sm: "h-9 px-4 py-1.5 text-xs rounded-lg",
        lg: "h-14 px-8 py-3 text-lg rounded-xl",
        icon: "size-10 rounded-lg",
        "icon-sm": "size-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
      {...props}
    />
  )
}

export { Button, buttonVariants }
