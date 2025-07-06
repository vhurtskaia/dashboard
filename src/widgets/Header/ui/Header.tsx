import React, {JSX} from "react";
import Link from "next/link";
import {IconBell, IconMenu2} from "@tabler/icons-react";
import {useAppDispatch} from "@/shared/store/hooks";
import {toggleMenu} from "@/widgets/Header/model/headerSlice";

export const Header = (): JSX.Element => {
    const dispatch = useAppDispatch()

    return (
        <header
            className={'bg-white flex gap-2 px-[16px] py-[8px] items-center justify-between border-b border-gray-200 md:border-b-0 md:border-r'}>
            <h4 className={'mr-auto'}>Logo</h4>

            <Link data-counter={2} href="#">
                <IconBell strokeWidth={1.25} width={20} height={20}/>
            </Link>

            <button
                className="md:hidden cursor-pointer"
                onClick={() => dispatch(toggleMenu())}
            >
                <IconMenu2 strokeWidth={1.25} width={20} height={20}/>
            </button>

        </header>
    );
};