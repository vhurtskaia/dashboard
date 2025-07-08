import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/shared/lib/utils"

export const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 rounded-[4px] whitespace-nowrap rounded-md text-sm transition-all hover:cursor-pointer disabled:pointer-events-none [&_svg]:pointer-events-none disabled:cursor-default [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    {
        variants: {
            variant: {
                filled:
                    "bg-indigo-500 text-white hover:bg-indigo-700 disabled:bg-gray-200 disabled:text-gray-600",
                outlined:
                    "bg-white text-gray-900 border-1 border-gray-300 hover:bg-gray-50 hover:border-gray-400 disabled:text-gray-600 disabled:border-gray-200",
                text:
                    "text-indigo-500 hover:text-indigo-600 disabled:text-gray-600",
                icon: ''
            },

            size: {
                small: "py-1 px-3 rounded-md gap-1.5 px-3",
                medium: "py-[6px] px-[16px]",
                large: "py-1.5 px-4 text-base",
            },

            destructive: {
                true: "",
                false: "",
            },
        },

        defaultVariants: {
            variant: "filled",
            size: "medium",
            destructive: false,
        },

        compoundVariants: [
            {
                variant: "filled",
                destructive: true,
                class: "bg-red-500 hover:bg-red-600",
            },
            {
                variant: "outlined",
                destructive: true,
                class: "bg-white text-red-600 border-red-300 hover:border-red-400",
            },
            {
                variant: "text",
                destructive: true,
                class: "text-red-600 hover:text-red-700",
            },
        ],
    }
)

export const Button = ({
                    className,
                    variant,
                    size,
                    asChild = false,
                    destructive = false,
                    ...props
                }: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
    asChild?: boolean,
    destructive?: boolean;
})=> {
    const Comp = asChild ? Slot : "button"

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({variant, size, destructive, className}))}
            {...props}
        />
    )
}