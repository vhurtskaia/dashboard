import * as React from "react"

import {cn} from "@/lib/utils"
import {cva, type VariantProps} from "class-variance-authority";

export const buttonVariants = cva(
    {
        variants: {
            size: {
                small: "py-[4px] px-[8px] body1",
                large: "py-[8px] px-[12px] body2",
            },
        },

        defaultVariants: {
            size: "large",
        },
    }
)

function Input({
                   className,
                   type,
                   size,
                   ...props
               }: React.ComponentProps<"input"> &
    VariantProps<typeof buttonVariants> & {
    size?: string,
}) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
                {size, className}
            )}
            {...props}
        />
    )
}

export {Input}
