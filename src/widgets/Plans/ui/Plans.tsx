import {Container, TextWithCheckIcon} from "@/shared/ui";
import React, {JSX} from "react";

export const Plans = (): JSX.Element => {

    const textArr = [
        'Unlimited Concurrent Sessions',
        'Country, Region, City, or ISP Targeting',
        'Automatic Proxy Potation',
        'HTTP, SOCKS5, and UDP support',
        'Proxy Servers in 195+ Countries',
        'Email and Chat Support',
        'API access',
        'Custom Responses for Your Proxy Roquests',
    ]

    return (
        <Container className="flex flex-col gap-[8px]">
            <h6 className={'text-gray-800'}>All plans include</h6>

            <div className={'grid grid-cols-2 gap-x-[16px] gap-y-[8px]'}>
                {textArr.map((text, index) => (
                    <TextWithCheckIcon key={index}>{text}</TextWithCheckIcon>
                ))}
            </div>
        </Container>
    )
}