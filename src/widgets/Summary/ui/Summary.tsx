'use client'

import {Badge, Button, Container, Separator, TextWithCheckIcon} from "@/shared/ui";
import React, {JSX, useState} from "react";
import {Input} from "@/shared/ui/Input";
import {PaymentMethod} from "@/shared/ui";
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {applyDiscountCode, clearDiscountCode} from "@/widgets/Summary/model/summarySlice";

export const Summary = (): JSX.Element => {
    const [discountCodeInput, setDiscountCodeInput] = useState('');
    const [discountError, setDiscountError] = useState('');

    const dispatch = useAppDispatch();

    const quantity = useAppSelector((state) => state.summary.quantity);
    const location = useAppSelector((state) => state.summary.location);
    const price = useAppSelector((state) => state.summary.price);
    const period = useAppSelector((state) => state.summary.period);
    const total = useAppSelector((state) => state.summary.total);
    const discountCode = useAppSelector((state) => state.summary.discountCode);
    const discountPercent = useAppSelector((state) => state.summary.discountPercent);

    const textArr = [
        '3-day Trial',
        'Customer Success Manager',
    ]

    const paymentMethodArr = [
        'Visa-gray',
        'Mastercard-gray',
        'AmericanExpress-gray',
        'DinersClub-gray',
        'UnionPay-gray'
    ]

    // price without discounts
    const baseTotal = quantity * price * period;

    const handleApplyDiscount = () => {
        if (!discountCodeInput) {
            setDiscountError('Please enter a discount code');
            return;
        }

        // test codes
        const discountCodes = {
            'WELCOME10': 10,
            'SPECIAL25': 25,
            'SUPER50': 50
        };

        if (discountCodeInput in discountCodes) {
            dispatch(applyDiscountCode({
                code: discountCodeInput,
                percent: discountCodes[discountCodeInput as keyof typeof discountCodes]
            }));
            setDiscountError('');
        } else {
            setDiscountError('Invalid discount code');
        }
    };

    const handleClearDiscount = () => {
        dispatch(clearDiscountCode());
        setDiscountCodeInput('');
        setDiscountError('');
    };

    return (
        <form className={'flex flex-col gap-[16px] xl:sticky xl:top-5 xl:h-max'}>
            <Container className="flex flex-col gap-[16px]">
                <h5 className={'text-gray-800'}>Order summary</h5>
                <div className={'flex flex-col gap-[8px]'}>
                    <p className="subtitle1">Datacenter Proxies</p>

                    {textArr.map((text, index) => (
                        <TextWithCheckIcon key={index}>{text}</TextWithCheckIcon>
                    ))}
                </div>

                <div className={'flex flex-col gap-[8px] body2'}>
                    <p className={'flex justify-between text-gray-600'}>Quantity of IP <span className={'text-gray-800'}>{quantity} IPs</span></p>
                    <p className={'flex justify-between text-gray-600'}>Location <span className={'text-gray-800'}>{location}</span></p>
                    <p className={'flex justify-between text-gray-600'}>Price per IP <span className={'text-gray-800'}>${price.toFixed(2)}</span></p>
                    <p className={'flex justify-between text-gray-600'}>Subscription period <span className={'text-gray-800'}>{period} {period === 1 ? 'month' : 'months'}</span></p>
                </div>

                <div className={'flex flex-col gap-[8px]'}>
                    <div className={'flex gap-[8px] pt-[12px]'}>
                        <Input
                            size={1}
                            type={'text'}
                            placeholder={'Add discount code'}
                            value={discountCodeInput}
                            onChange={(e) => setDiscountCodeInput(e.target.value)}
                        />

                        <Button
                            variant={'outlined'}
                            type={'button'}
                            size={'small'}
                            onClick={!discountCode ? handleApplyDiscount : handleClearDiscount}
                        >
                            {!discountCode ? 'Apply' : 'Clear'}
                        </Button>
                    </div>

                    {discountError && <p className={'text-red-500 text-sm'}>{discountError}</p>}

                    {discountCode && (
                        <p className={'text-green-600 text-sm'}>
                            Code {discountCode} applied ({discountPercent}% off)
                        </p>
                    )}
                </div>

                <Separator/>
                <div className={'flex flex-col gap-[8px]'}>
                    {period === 12 && <p className={'flex justify-between text-gray-600'}>Discount 12 months <span className={'text-gray-800'}>-${(baseTotal - total).toFixed(2)}</span></p>}

                    {discountCode && (
                        <p className={'flex justify-between text-gray-600'}>
                            Discount {discountPercent}% <Badge variant={'default'} size={'small'}>{discountCode}</Badge>
                            <span className={'text-gray-800'}>–${(discountPercent / 100 * baseTotal).toFixed(2)}</span>
                        </p>
                    )}

                    <p className={'flex justify-between items-center text-gray-700 subtitle2'}>
                        Total
                        <span className={'text-gray-800 font-[500] text-[24px]'}>
                        ${total.toFixed(2)}
                    </span>
                    </p>
                    <input type={'hidden'} name={'total'} value={+total}/>
                </div>
            </Container>

            <Button variant={'filled'} type={'submit'} size={'large'}>Continue to checkout</Button>

            <div className={'flex w-full justify-center'}>
                {paymentMethodArr.map((src, index) => (
                    <PaymentMethod key={index} size={40} src={src} className={'grayscale'}/>
                ))}
            </div>
        </form>
    )
}