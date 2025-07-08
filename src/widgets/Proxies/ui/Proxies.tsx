'use client'

import Image from "next/image";
import React, {JSX} from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Badge,
    Button,
    Container,
    Flag,
    Input,
    Label,
    Radio,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/shared/ui";
import {Slider} from "@/shared/ui/Slider";
import {IconEdit} from "@tabler/icons-react";
import {cn} from "@/shared/lib/utils";
import {useAppDispatch} from "@/shared/store/hooks";
import {setLocation, setPeriod, setQuantity} from "@/widgets/Summary/model/summarySlice";

export const Proxies = (): JSX.Element => {
    const digits = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

    const [customQuantity, setCustomQuantity] = React.useState<boolean>(false)

    const countryList = [{
        name: 'United Kingdom',
        code: 'uk'
    }, {
        name: 'Australia',
        code: 'au'
    }, {
        name: 'United States',
        code: 'us'
    }]
    const dispatch = useAppDispatch()

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

            <div className={cn(
                "flex flex-col gap-[12px]",
                !customQuantity ? 'pt-[40px] pb-[8px]' : 'gap-[4px]'
            )}
            >
                {customQuantity ? (<>
                    <Label htmlFor="quantity">Custom quantity</Label>
                    <Input onChange={(e) => {
                                console.log(e.target.value)
                            dispatch(setQuantity(+e.target.value))
                        }}
                        id={'quantity'} type={'number'} max={1000} min={10}
                    />
                </>) : (<>
                    <Slider max={1000} min={10} step={1}/>
                    <div className={'flex gap-[6px] justify-between'}>
                        {digits.map((digit, index) => (
                            <span key={index}
                                  className={'body2 text-gray-500 text-[12px] md:text-[14px]'}>{digit}</span>
                        ))}
                    </div>
                </>)}
            </div>

            <Button variant={'outlined'} size={'medium'} className={'text-indigo-500 w-max'}
                    onClick={() => setCustomQuantity(!customQuantity)}>
                {customQuantity ? (<>
                    <IconEdit strokeWidth={1.25} className={'size-[16px]'}/>
                    Enter a custom quantity
                </>) : <>
                    Select from the range
                </>}
            </Button>

            <div className="flex flex-col gap-[8px]">
                <Label htmlFor="1">Select subscription cycle</Label>
                <Radio id={'1'} value={1}
                       onChange={(e) => dispatch(setPeriod(+e.target.value)) }
                       name={'monts'} defaultChecked>1 month</Radio>
                <Radio id={'3'} value={3}
                       onChange={(e) => dispatch(setPeriod(+e.target.value)) }
                       name={'monts'}>3 months</Radio>
                <Radio id={'12'} value={12} name={'monts'}
                       onChange={(e) => dispatch(setPeriod(+e.target.value)) }
                >
                    12 months
                    <Badge size={'small'} variant={'success'}>Save 20%</Badge>
                </Radio>
            </div>

            <div className="flex flex-col gap-[8px]">
                <Label htmlFor="country">Select location</Label>
                <Select onValueChange={(value: string) => dispatch(setLocation(value))}>
                    <SelectTrigger id={'country'} className="w-[180px]">
                        <SelectValue placeholder={<>
                            <Flag size={20} src={countryList[0].code}/>
                            {countryList[0].name}
                        </>}/>
                    </SelectTrigger>

                    <SelectContent>
                        {countryList.map((country, index) => (
                            <SelectItem key={index} value={country.name}>
                                <Flag size={20} src={country.code}/> {country.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </Container>
    )
}