import {JSX} from "react";
import Image from "next/image";

export const Flag = ({src, className}): JSX.Element => {
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