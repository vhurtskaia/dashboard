'use client'

import React, {JSX} from "react";
import {Header, Aside, Plans, Proxies, Summary} from "@/widgets";
import {Button} from "@/shared/ui";
import {IconChevronLeft} from "@tabler/icons-react";

export default function Home(): JSX.Element {
    return (
        <div className={'flex flex-col md:flex-row'}>
            <div className={'flex flex-col'}>
                <Header/>
                <Aside/>
            </div>

            <main>
                <Button className={'w-max'} variant={'outlined'} size={'small'}>
                    <IconChevronLeft strokeWidth={1.25} width={16} height={16}/>
                    Back to all
                </Button>

                <Proxies/>

                <Summary/>

                <Plans/>
            </main>
        </div>
    );
}