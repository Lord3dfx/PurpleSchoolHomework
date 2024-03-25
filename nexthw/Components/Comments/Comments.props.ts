import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CommentsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    postID: string,
    children?: ReactNode
}