import {IconCircleCheckFilled} from "@tabler/icons-react";
import React, {JSX} from "react";

interface IProps {
    children: React.ReactNode;
}

export const TextWithCheckIcon = ({children}: IProps): JSX.Element => {
    return (
        <span className={'flex gap-[8px] items-center body2 text-gray-600'}>
            <IconCircleCheckFilled fill={'var(--green-600)'} width={20} height={20}/>
            {children}
        </span>
    )
};