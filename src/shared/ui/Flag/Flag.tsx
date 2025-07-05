import {JSX} from "react";
import Image from "next/image";

interface IProps {
    src: string;
    className?: string;
}
export const Flag = ({src, className}: IProps): JSX.Element => {
    return(
        <Image
            width={24}
            height={24}
            src={src}
            alt={src.toUpperCase()}
            className={className}
        />
    )
}