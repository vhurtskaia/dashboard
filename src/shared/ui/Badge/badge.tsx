import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center justify-center rounded border-1 font-[700]",
    {
        variants: {
            variant: {
                default:
                    "bg-gray-50 text-gray-600 border-gray-300",
                success:
                    "bg-green-50 text-green-800 border-green-300",
                warning:
                    "bg-orange-50 text-orange-800 border-orange-300",
                error:
                    "bg-red-50 text-red-800 border-red-300",
            },

            size: {
                small: "py-[2px] px-[6px] text-[12px] h-[20px]",
                large: "py-[2px] px-[8px] text-[14px] h-[24px]",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "small"
        },
    }
)

function Badge({
                   className,
                   variant,
                   size,
                   asChild = false,
                   ...props
               }: React.ComponentProps<"span"> &
    VariantProps<typeof badgeVariants> & { asChild?: boolean, size?: string }) {
    const Comp = asChild ? Slot : "span"

    return (
        <Comp
            data-slot="badge"
            className={cn(badgeVariants({variant, size}), className)}
            {...props}
        />
    )
}

export {Badge, badgeVariants}
