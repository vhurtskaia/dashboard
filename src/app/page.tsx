'use client'

import React from "react";
import {Header, Aside} from "@/widgets";
import {Button} from "@/shared/ui";
import {IconChevronLeft} from "@tabler/icons-react";

export default function Home() {
    return (
        <div className={'flex flex-col md:flex-row'}>
            <div className={'flex flex-col'}>
                <Header/>
                <Aside/>
            </div>

            <main className={'flex flex-col py-[24px] px-[48px] flex-dored justify-center items-center h-dvh gap-5 w-full'}>
                <Button variant={'outlined'} size={'small'}>
                    <IconChevronLeft strokeWidth={1.25} width={16} height={16}/>
                    Back to all
                </Button>
            </main>
        </div>
    );
}