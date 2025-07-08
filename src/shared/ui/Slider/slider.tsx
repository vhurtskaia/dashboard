"use client"
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/shared/lib/utils"
import {IconGridDots} from "@tabler/icons-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/shared/ui";
import {setQuantity} from "@/widgets/Summary/model/summarySlice";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const [currentValues, setCurrentValues] = React.useState<number[]>(
      Array.isArray(value)
          ? value
          : Array.isArray(defaultValue)
              ? defaultValue
              : [min, max]
  );

  React.useEffect(() => {
    if (Array.isArray(value)) {
      setCurrentValues(value);
    }
  }, [value]);

  const dispatch = useAppDispatch()
    const quantity = useAppSelector((state) => state.summary.quantity);

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      onValueChange={(newValues) => {
          setCurrentValues(newValues);
          if (props.onValueChange) {
              props.onValueChange(newValues);
          }
          dispatch(setQuantity(newValues[0]))
      }}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >


      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-[8px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-indigo-400 absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>

      {currentValues.map((val, index) => {
        return(
            <SliderPrimitive.Thumb
                data-slot="slider-thumb"
                key={index}
                className="border-indigo-500 flex justify-center items-center bg-white size-[24px] shrink-0 rounded-[4px] border shadow-sm transition-[color,box-shadow] hover:ring-1 focus-visible:ring-1 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
            >
              <Tooltip>
                <TooltipTrigger>
                  <IconGridDots width={20} height={20} strokeWidth={1.25}/>
                </TooltipTrigger>
                <TooltipContent>
                  <span className={'subtitle2 text-white'}>{quantity} IP</span>
                </TooltipContent>
              </Tooltip>
            </SliderPrimitive.Thumb>
        )
      })}


    </SliderPrimitive.Root>
  )
}

export { Slider }
