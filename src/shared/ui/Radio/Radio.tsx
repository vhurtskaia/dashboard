"use client"

import * as React from "react"

import {cn} from "@/shared/lib/utils"

import {JSX} from "react";

interface RadioProps {
    children: React.ReactNode;
    id: string;
    name: string;
    className?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    value?: string | number;
    defaultChecked?: boolean;
    rest?: void;
}

export const Radio = ({children,
                          id,
                          name,
                          className,
                          disabled = false,
                          onChange,
                          checked,
                          value,
                          defaultChecked,
                          ...rest
                      } : RadioProps): JSX.Element => {


    return (
        <div className={'relative'}>
            <input
                id={id}
                name={name}
                type="radio"
                disabled={disabled}
                onChange={onChange}
                checked={checked}
                value={value}
                defaultChecked={defaultChecked}
                {...rest}
            />

            <label
                className={cn(
                    "p-[12px] pl-[36px] border border-gray-300 flex gap-[8px] items-center rounded-[8px]",
                    "subtitle1 text-gray-800",
                    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
                    className
                )}
                htmlFor={id}
            >
                {children}
            </label>
        </div>
    )
}
