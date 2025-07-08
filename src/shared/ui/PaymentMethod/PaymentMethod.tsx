import Image from 'next/image'
import * as React from "react"

interface PaymentMethodProps {
    src: string,
    className?: string,
    size?: 32 | 40 | 46 | 58
}

export const PaymentMethod = ({src, size = 40, className}: PaymentMethodProps) => {
    const heightMap = {
        32: 24,
        40: 24,
        46: 32,
        58: 40
    };

    return (
        <Image
            className={className}
            src={`/images/shared/ui/paymentMethod/${src}.svg`}
            alt={src}
            width={size}
            height={heightMap[size]}
        />
    )
}