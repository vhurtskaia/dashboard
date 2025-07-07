import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Container,
    Table, TableBody,
    TableCaption, TableCell, TableHead, TableHeader, TableRow
} from "@/shared/ui";
import React, {JSX} from "react";

export const Proxies = (): JSX.Element => {
    return (
        <Container className={'gap-6'}>
            <div className="flex gap-[16px]">
                <Image src={'/images/widgets/Proxies/logo.svg'} alt={'Logo'} width={56} height={56}/>
                <div className={'flex flex-col gap-[4px]'}>
                    <h4>Datacenter Proxies</h4>
                    <p className={'body2 text-gray-500'}>High-speed, reliable proxies sourced from data centers, ideal
                        for managing high-volume, concurrent requests.</p>
                </div>
            </div>

            <div className={'flex flex-col gap-[4px]'}>
                <p>Datacenter Proxies</p>
                <p className={'body2 text-gray-500'}>High-speed, reliable proxies sourced from data centers, ideal for
                    managing high-volume, concurrent requests.</p>
            </div>

            <div className={'flex flex-col gap-[4px]'}>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Bundle discounts</AccordionTrigger>
                        <AccordionContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[98px]">IPs</TableHead>
                                        <TableHead>10–24</TableHead>
                                        <TableHead>25–49</TableHead>
                                        <TableHead>50–99</TableHead>
                                        <TableHead>100+</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="w-[98px]">Price per IP</TableCell>
                                        <TableCell>$3.00</TableCell>
                                        <TableCell>$2.75</TableCell>
                                        <TableCell className="text-right">$2.50</TableCell>
                                        <TableCell className="text-right">$2.25</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </Container>
    )
}