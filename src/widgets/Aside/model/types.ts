import { ReactNode } from 'react';

export interface AsideItemProps {
  title: string;
  url?: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
}

export interface AsideGroupProps {
  heading: string;
  data: AsideItemProps[];
}

export type AsideItems = AsideGroupProps[];