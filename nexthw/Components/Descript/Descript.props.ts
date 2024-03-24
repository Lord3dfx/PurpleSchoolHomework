import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface DescriptProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
   children?: ReactNode
}