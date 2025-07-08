"use client"

import {JSX} from "react"

import { cn } from "@/shared/lib/utils"

interface SeparatorProps {
  className?: string;
}

export const Separator = ({
  className,
  ...props
}: SeparatorProps): JSX.Element => {
  return (
    <hr
      className={cn(
        "bg-gray-200 w-full h-px",
        className
      )}
      {...props}
    />
  )
}