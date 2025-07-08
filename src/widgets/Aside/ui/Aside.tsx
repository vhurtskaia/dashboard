'use client'

import React, {JSX, useEffect, useRef} from "react";
import {AsideHeader} from "./AsideHeader";
import {AsideGroup} from "./AsideGroup";
import {AsideItem} from "./AsideItem";
import {asideItems, expandItems} from "../model/data";
import {Separator} from "@/shared/ui";
import {AsideFooter} from "@/widgets/Aside/ui/AsideFooter";
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {toggleMenu} from "@/widgets/Header/model/headerSlice";
import {IconX} from "@tabler/icons-react";
import {cn} from "@/shared/lib/utils";

export const Aside = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const isMenuOpen = useAppSelector((state) => state.header.isMenuOpen)
    const asideRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!isMenuOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (asideRef.current && !asideRef.current.contains(event.target as Node)) {
                dispatch(toggleMenu());
            }
        }

        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                dispatch(toggleMenu());
            }
        }

        document.addEventListener("keyup", handleKeyUp);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            if (isMenuOpen) {
                document.removeEventListener("keyup", handleKeyUp);
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }
    }, [isMenuOpen, dispatch]);

    return (
        <aside
            ref={asideRef}
            className={cn(
                "md:border-r md:border-gray-200",
                isMenuOpen ? 'open' : ''
            )}
        >
            <div className={'flex justify-end min-h-0 p-[16px] md:hidden'}>
                <button className={'cursor-pointer'} onClick={() => dispatch(toggleMenu())}>
                    <IconX strokeWidth={1.25} width={20} height={20}/>
                </button>
            </div>

            <div className={'flex flex-col gap-[16px] min-h-0 p-[16px] overflow-auto'}>
                <AsideHeader/>

                {asideItems.map((item, index) => (
                    <AsideGroup key={index} {...item} />
                ))}

                <Separator/>

                <div className="flex flex-col gap-1">
                    {expandItems.map((item, index) => (
                        <AsideItem key={index} {...item} />
                    ))}
                </div>
            </div>

            <AsideFooter/>
        </aside>
    );
}