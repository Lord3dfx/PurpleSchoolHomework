import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PostProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    title: string,
    category: string,
    date: string,
    description: string,
    timeToRead: string,
    likecounter: number,
    children?: ReactNode
}