import Image from 'next/image';
import {
    IconBasket, IconChevronRight,
    IconClipboardList, IconCodeCircle2, IconCoin,
    IconDeviceDesktopAnalytics,
    IconEye, IconHelp, IconKey,
    IconLayoutDashboard,
    IconSelectAll, IconUserPlus, IconUsers
} from "@tabler/icons-react";
const iconProps = { strokeWidth: 1.25, width: 20, height: 20, className: 'min-w-[20px]' }

export const asideItems = [{
    heading: "",
    data: [{
        title: "Dashboard",
        url: "#",
        icon: <IconLayoutDashboard {...iconProps}/>,
}]
}, {
    heading: "System Overview",
        data: [{
        title: "Observability Overview",
        url: "#",
        icon: <IconEye {...iconProps}/>,
}, {
        title: "Live Log Monitor",
            url: "#",
            icon: <IconDeviceDesktopAnalytics {...iconProps}/>,
        rightIcon: <Image alt='Life' className={'ml-auto'} width={24} height={24}
        src={"/images/widgets/Aside/live-log.svg"}/>
    }]
}, {
    heading: "My Services",
        data: [{
        title: "Summary",
        url: "#",
        icon: <IconSelectAll {...iconProps}/>,
}, {
        title: "Proxy List",
            url: "#",
            icon: <IconClipboardList {...iconProps}/>,
    }, {
        title: "User Settings",
            url: "#",
            icon: <IconUsers {...iconProps}/>,
    }, {
        title: "All Products",
            url: "#",
            icon: <IconBasket {...iconProps}/>,
    }]
}, {
    heading: "Developer Section",
        data: [{
        title: "API Keys",
        url: "#",
        icon: <IconKey {...iconProps}/>,
}, {
        title: "API Requests",
            url: "#",
            icon: <IconCodeCircle2 {...iconProps}/>,
    }]
}, {
    heading: "Affiliate Programs",
        data: [{
        title: "Resellers Statistics",
        url: "#",
        icon: <IconCoin {...iconProps}/>,
}, {
        title: "Affiliate Program",
            url: "#",
            icon: <IconUserPlus {...iconProps}/>,
    }]
}]

export const expandItems = [{
    title: "Billing",
    icon: <IconEye {...iconProps}/>,
    rightIcon: <IconChevronRight {...iconProps}/>
}, {
    title: "Help",
        icon: <IconHelp {...iconProps}/>,
    rightIcon: <IconChevronRight {...iconProps}/>,
}]