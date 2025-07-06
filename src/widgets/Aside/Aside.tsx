'use client'

import {
    Sidebar as SidebarComponent,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/shared/ui/Sidebar/sidebar"
import Link from "next/link";
import React, { JSX } from "react";
import {
    IconEye,
    IconDeviceDesktopAnalytics,
    IconSelectAll,
    IconClipboardList,
    IconUsers,
    IconBasket,
    IconKey,
    IconCodeCircle2,
    IconCoin,
    IconUserPlus,
    IconLayoutDashboard,
    IconPlus,
    IconBell,
    IconDotsVertical,
    IconChevronRight,
    IconHelp
} from '@tabler/icons-react';

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/shared/ui/DropdownMenu";
import Image from "next/image";
import {Button, Separator} from "@/shared/ui";

function Aside(): JSX.Element {

    const items = [{
        heading: "",
        data: [{
            title: "Dashboard",
            url: "#",
            icon: <IconLayoutDashboard strokeWidth={1.25}/>,
        }]
    }, {
        heading: "System Overview",
        data: [{
            title: "Observability Overview",
            url: "#",
            icon: <IconEye strokeWidth={1.25}/>,
        }, {
            title: "Live Log Monitor",
            url: "#",
            icon: <IconDeviceDesktopAnalytics strokeWidth={1.25}/>,
            rightIcon: <Image alt='Life' width={24} height={24} src={"/images/widgets/Aside/live-log.svg"}/>
        }]
    }, {
        heading: "My Services",
        data: [{
            title: "Summary",
            url: "#",
            icon: <IconSelectAll strokeWidth={1.25}/>,
        }, {
            title: "Proxy List",
            url: "#",
            icon: <IconClipboardList strokeWidth={1.25}/>,
        }, {
            title: "User Settings",
            url: "#",
            icon: <IconUsers strokeWidth={1.25}/>,
        }, {
            title: "All Products",
            url: "#",
            icon: <IconBasket strokeWidth={1.25}/>,
        }]
    }, {
        heading: "Developer Section",
        data: [{
            title: "API Keys",
            url: "#",
            icon: <IconKey strokeWidth={1.25}/>,
        }, {
            title: "API Requests",
            url: "#",
            icon: <IconCodeCircle2 strokeWidth={1.25}/>,
        }]
    }, {
        heading: "Affiliate Programs",
        data: [{
            title: "Resellers Statistics",
            url: "#",
            icon: <IconCoin strokeWidth={1.25}/>,
        }, {
            title: "Affiliate Program",
            url: "#",
            icon: <IconUserPlus strokeWidth={1.25}/>,
        }]
    }]

    const expandItems = [{
        title: "Billing",
        icon: <IconEye strokeWidth={1.25}/>,
        rightIcon: <IconChevronRight strokeWidth={1.25}/>
    }, {
        title: "Help",
        icon: <IconHelp strokeWidth={1.25}/>,
        rightIcon: <IconChevronRight strokeWidth={1.25}/>,
    }]

    return (
        <SidebarComponent>
            <SidebarHeader className={'flex  items-center flex-row justify-between gap-2'}>
                <h4>Logo</h4>
                <Link data-counter={2} href="/">
                    <IconBell strokeWidth={1.25} width={20} height={20}/>
                </Link>
                {/*<SidebarTrigger />*/}
            </SidebarHeader>

            <SidebarContent>
                <Button variant="outlined" size="small" className="w-full">
                    <IconPlus strokeWidth={1.25}/>
                    Buy new proxies
                </Button>

                    {items.map((item, index) => (
                        <SidebarGroup key={index}>
                            {item.heading && <SidebarGroupLabel>{item.heading}</SidebarGroupLabel>}

                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {item.data.map((arr, index) => (
                                        <SidebarMenuItem key={index}>
                                            <SidebarMenuButton asChild>
                                                <Link href={arr.url}>
                                                    {arr.icon}
                                                    <span className={'w-full subtitle2'}>{arr.title}</span>
                                                    {arr.rightIcon}
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    ))}

                    <Separator/>

                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {expandItems.map((item, index) => (
                                    <SidebarMenuItem key={index}>
                                        <SidebarMenuButton asChild>
                                            <div>
                                                {item.icon}
                                                <span className={'w-full subtitle2'}>{item.title}</span>
                                                {item.rightIcon}
                                            </div>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>

                <Separator/>

                <SidebarFooter>
                    <div className={'flex flex-col'}>
                        <span className="subtitle2 text-gray-800">Henry Smith</span>
                        <span className="body2 text-gray-600">henry.smith@gmail.com</span>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger className={'p-0 m-0 w-[20px] h-[20px]'} asChild>
                            <SidebarMenuButton>
                                <IconDotsVertical strokeWidth={1.25}/>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side="top"
                            className="w-[--radix-popper-anchor-width]"
                        >
                            <DropdownMenuItem>
                                <span>Account</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span>Log Out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarFooter>
            </SidebarComponent>
    )
}

export {Aside}