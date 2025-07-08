import React, { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

export interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export const Container = ({
                              children,
                              className,
                          }: ContainerProps) => {
    return (
        <div className={cn(
                `bg-white flex flex-col p-[16px] md:p-[24px] rounded-[8px] border`,
                className
            )}
        >
            {children}
        </div>
    );
};
