import { IconDotsVertical } from '@tabler/icons-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/shared/ui/DropdownMenu";
import {Separator} from "@/shared/ui";

export const AsideFooter = () => {
    return (
        <>
            <Separator className={'mt-auto'}/>

            <footer className={"sticky bottom-0 bg-white flex items-center justify-between gap-[8px] px-[16px] py-[8px]"}>
                <div className={'flex flex-col'}>
                    <span className="subtitle2 text-gray-800">Henry Smith</span>
                    <span className="body2 text-gray-600">henry.smith@gmail.com</span>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger className={'p-0 m-0 w-[20px] h-[20px]'} asChild>
                        <IconDotsVertical strokeWidth={1.25}/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        side="top"
                        className="w-[--radix-popper-anchor-width]"
                    >
                        <DropdownMenuItem>
                            <span>Account</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <span>Log Out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </footer>
        </>
    );
}