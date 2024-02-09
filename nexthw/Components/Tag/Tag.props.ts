import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    size?: 's' | 'm' | 'l';
    children: ReactNode;
    href?: string;
    fontw?: 'regular' | 'bold' | 'light';
    isref?: 'true' | 'false';
}