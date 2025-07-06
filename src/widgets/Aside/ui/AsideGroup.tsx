import { AsideGroupProps } from "../model/types";
import { AsideItem } from "./AsideItem";

export function AsideGroup({ heading, data }: AsideGroupProps) {
    const itemsList = (
        <div className={'flex w-full min-w-0 flex-col gap-1'}>
            {data.map((item, index) => (
                <AsideItem key={index} {...item} />
            ))}
        </div>
    );

    return !heading ?
        itemsList :  (
        <div className={'flex flex-col w-full min-w-0 gap-[8px]'}>
            <span className={'overline-text text-gray-600 px-[12px] flex shrink-0'}>{heading}</span>
            {itemsList}
        </div>
    );
}