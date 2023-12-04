import { LinkProps as LP } from "next/link";
import Link from "next/link";
import { FC } from "react";

export interface LinkProps extends LP {
    className?: string
    text? : string
    href : string
}

export const LinkBtn:FC<LinkProps> = ({text, href ,className}) => {
    return (
        <Link href={href} className={className}>
            {text}
        </Link>
    )
}