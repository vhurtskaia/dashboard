import Link from "next/link";
import { AsideItemProps } from "../model/types";

export function AsideItem({ title, url = "#", icon, rightIcon }: AsideItemProps) {
    return (
        <Link
            href={url}
            className={"flex w-full items-center pl-[12px] rounded-[4px] py-[4px] radius hover:bg-indigo-50 hover:text-indigo-500 gap-2 overflow-hidden outline-hidden ring-sidebar-ring transition-[width,height,padding] focus-visible:bg-indigo-50 focus-visible:text-indigo-500 active:bg-indigo-50 active:text-indigo-500 disabled:pointer-events-none"}
        >
            {icon}
            <span className="flex-1 text-sm">{title}</span>
            {rightIcon}
        </Link>
    );
}
