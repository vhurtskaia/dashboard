import {JSX} from "react";
import Image from "next/image";

interface IProps {
    src: string;
    className?: string;
    size?: number;
}
export const Flag = ({src, size = 24, className}: IProps): JSX.Element => {
    return(
        <Image
            width={size}
            height={size}
            src={`/images/shared/ui/flag/${src}.svg`}
            alt={src.toUpperCase()}
            className={className}
        />
    )
}